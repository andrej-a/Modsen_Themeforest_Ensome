import React from 'react';
import { useTranslation } from 'react-i18next';
import MoonLoader from 'react-spinners/MoonLoader';
import { useTheme } from 'styled-components';

import { DefaultButton } from '@/components';
import { ValidationError } from '@/components/SubscribeToUsSection/SubscribeForm/styles';
import { schema } from '@/config/fullFormSchema';
import { DefaultTheme } from '@/globalStyles';
import useMobile from '@/hooks/useMobile';
import useSubscribe from '@/hooks/useSubscribe';
import { dictionary, numberEnums, size } from '@/types/constants';

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
    SUBSCRIBE_PLACEHOLDER,
    NAME_INPUT_PLACEHOLDER,
    THEME_INPUT_PLACEHOLDER,
    MESSAGE_INPUT_PLACEHOLDER,
    SUBSCRIBE_BUTTON_VALUE,
    SEND_MESSAGE,
} = dictionary;

const { mobileL } = size;
const ContactsPageForm = () => {
    const { t } = useTranslation();
    const { isMobile } = useMobile(mobileL);
    const theme = useTheme() as DefaultTheme;
    const {
        formRef,
        isDisabled,
        register,
        handleSubmit,
        errors,
        handleChange,
        isLoading,
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
                        {isLoading ? (
                            <MoonLoader
                                color={theme.colors.white}
                                size={theme.width.sx}
                            />
                        ) : (
                            t(isMobile ? SEND_MESSAGE : SUBSCRIBE_BUTTON_VALUE)
                        )}
                    </DefaultButton>
                </SubmitButtonContainer>
            </MessageForm>
        </MessageFormContainer>
    );
};

export default ContactsPageForm;
