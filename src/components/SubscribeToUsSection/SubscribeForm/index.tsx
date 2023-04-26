import React from 'react';
import { useTranslation } from 'react-i18next';

import useMobile from '@/hooks/useMobile';
import useSubscribe from '@/hooks/useSubscribe';
import { dictionary, envConstants, size } from '@/types/constants';

import { schema } from './config/schema';
import {
    SubmitButton,
    SubscribeForm,
    SubscribeInput,
    ValidationError,
} from './styles';

const { SUBSCRIBE_PLACEHOLDER, SUBSCRIBE_BUTTON_VALUE, SUBSCRIBE } = dictionary;
const { TEMPLATE_ID } = envConstants;

const { tablet } = size;
const SubscribeFormComponent = () => {
    const { isMobile } = useMobile(tablet);
    const { t } = useTranslation();
    const {
        formRef,
        isDisabled,
        register,
        handleSubmit,
        errors,
        handleChange,
    } = useSubscribe(schema, TEMPLATE_ID);
    return (
        <SubscribeForm ref={formRef} onSubmit={handleSubmit(handleChange)}>
            <SubscribeInput
                isError={Object.keys(errors).length > 0}
                type="text"
                {...register('email')}
                disabled={isDisabled}
                placeholder={t(SUBSCRIBE_PLACEHOLDER) as string}
            />
            <ValidationError>
                {t(errors.email?.message as string)}
            </ValidationError>
            <SubmitButton
                disabled={!!Object.keys(errors).length || isDisabled}
                type="submit"
                value={
                    t(isMobile ? SUBSCRIBE : SUBSCRIBE_BUTTON_VALUE) as string
                }
            />
        </SubscribeForm>
    );
};

export default SubscribeFormComponent;
