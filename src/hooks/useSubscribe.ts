import { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Schema } from 'yup';

import { envConstants } from '@/types/constants';
import createNotification from '@/utils/notificationSettings';
import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';

const { SERVICE_ID, TEMPLATE_ID, USER_ID } = envConstants;

type TFormFileds = {
    email: string;
    name?: string;
    theme?: string;
    message?: string;
};

const useSubscribe = (schema: Schema<TFormFileds>) => {
    const [isDisabled, setIsDisabled] = useState(false);
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

    const handleChange: SubmitHandler<TFormFileds> = () => {
        setIsDisabled(true);
        emailjs
            .sendForm(SERVICE_ID!, TEMPLATE_ID!, formRef.current!, USER_ID)
            .then(
                result => {
                    createNotification('success', result.text);
                    setIsDisabled(false);
                },
                error => {
                    createNotification('error', error.text);
                    setIsDisabled(false);
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
    };
};

export default useSubscribe;
