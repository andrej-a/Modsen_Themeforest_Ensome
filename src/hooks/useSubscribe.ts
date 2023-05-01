import { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Schema } from 'yup';

import { envConstants } from '@/types/constants';
import createNotification from '@/utils/notificationSettings';
import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';

const { SERVICE_ID, USER_ID, FULL_FORM_TEMPLATE_ID } = envConstants;

type TFormFileds = {
    email: string;
    name?: string;
    theme?: string;
    message?: string;
};

const useSubscribe = (schema: Schema<TFormFileds>, template?: string) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<TFormFileds>({
        resolver: yupResolver(schema),
        defaultValues: { email: '', name: '', theme: '', message: '' },
    });

    const handleChange: SubmitHandler<TFormFileds> = ({
        email,
        theme,
        name,
        message,
    }) => {
        setIsDisabled(true);
        setIsLoading(true);
        emailjs
            .send(
                SERVICE_ID!,
                template || FULL_FORM_TEMPLATE_ID!,
                {
                    email,
                    theme,
                    name,
                    message,
                },
                USER_ID,
            )
            .then(
                result => {
                    createNotification('success', result.text);
                    setIsDisabled(false);
                    setIsLoading(false);
                },
                error => {
                    createNotification('error', error.text);
                    setIsDisabled(false);
                    setIsLoading(false);
                },
            );
    };
    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    return {
        formRef,
        isDisabled,
        register,
        handleSubmit,
        errors,
        handleChange,
        isLoading,
    };
};

export default useSubscribe;
