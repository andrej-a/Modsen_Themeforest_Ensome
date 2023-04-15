import React from 'react';
import { useTranslation } from 'react-i18next';

import { DefaultButton } from '@/components';
import { ValidationError } from '@/components/SubscribeToUsSection/SubscribeForm/styles';
import useSubscribe from '@/hooks/useSubscribe';
import { numberEnums, valuesOfTheSettings } from '@/types/constants';

import { schema } from './config/schema';
import {
    CustomerDataContainer,
    CustomerDataInput,
    InputWrapper,
    MessageForm,
    MessageFormContainer,
    MessageInput,
    SubmitButtonContainer,
    ThemeInput,
} from './styles';

const {
    MINIMUM_LETTERS_OF_THEME_INPUT,
    MINIMUM_LETTERS_OF_NAME_INPUT,
    MINIMUM_LETTERS_OF_MESSAGE_INPUT,
} = numberEnums;

const {
    SUBSCRIBE_PLACEHOLDER,
    NAME_INPUT_PLACEHOLDER,
    THEME_INPUT_PLACEHOLDER,
    MESSAGE_INPUT_PLACEHOLDER,
    SUBSCRIBE_BUTTON_VALUE,
} = valuesOfTheSettings;

const ContactsPageForm = () => {
    const { t } = useTranslation();
    const {
        formRef,
        isDisabled,
        register,
        handleSubmit,
        errors,
        handleChange,
    } = useSubscribe(schema);
    return (
        <MessageFormContainer>
            <MessageForm ref={formRef} onSubmit={handleSubmit(handleChange)}>
                <CustomerDataContainer>
                    <InputWrapper>
                        <CustomerDataInput
                            {...register('email')}
                            name="email"
                            type="email"
                            placeholder={t(SUBSCRIBE_PLACEHOLDER) as string}
                        />
                        <ValidationError>
                            {t(errors.email?.message as string)}
                        </ValidationError>
                    </InputWrapper>
                    <InputWrapper>
                        <CustomerDataInput
                            {...register('name')}
                            name="name"
                            type="text"
                            placeholder={t(NAME_INPUT_PLACEHOLDER) as string}
                        />
                        <ValidationError>
                            {t(errors.name?.message as string)}
                        </ValidationError>
                    </InputWrapper>
                </CustomerDataContainer>
                <ThemeInput
                    {...register('theme')}
                    name="theme"
                    type="text"
                    placeholder={t(THEME_INPUT_PLACEHOLDER) as string}
                />
                <ValidationError>
                    {t(errors.theme?.message as string)}
                </ValidationError>
                <MessageInput
                    {...register('message')}
                    name="message"
                    type="text"
                    placeholder={t(MESSAGE_INPUT_PLACEHOLDER) as string}
                />
                <ValidationError>
                    {t(errors.message?.message as string)}
                </ValidationError>
                <SubmitButtonContainer>
                    <DefaultButton
                        type="submit"
                        disabled={!!Object.keys(errors).length || isDisabled}
                    >
                        {t(SUBSCRIBE_BUTTON_VALUE)}{' '}
                    </DefaultButton>
                </SubmitButtonContainer>
            </MessageForm>
        </MessageFormContainer>
    );
};

export default ContactsPageForm;
