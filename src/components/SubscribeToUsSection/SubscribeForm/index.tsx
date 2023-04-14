import React from 'react';
import { useTranslation } from 'react-i18next';

import useSubscribe from '@/hooks/useSubscribe';
import { valuesOfTheSettings } from '@/types/constants';

import {
    SubmitButton,
    SubscribeForm,
    SubscribeInput,
    ValidationError,
} from './styles';

const { SUBSCRIBE_PLACEHOLDER, SUBSCRIBE_BUTTON_VALUE } = valuesOfTheSettings;
const SubscribeFormComponent = () => {
    const { t } = useTranslation();
    const {
        formRef,
        isDisabled,
        register,
        handleSubmit,
        errors,
        handleChange,
    } = useSubscribe();
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
                value={t(SUBSCRIBE_BUTTON_VALUE) as string}
            />
        </SubscribeForm>
    );
};

export default SubscribeFormComponent;
