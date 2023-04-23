import React from 'react';
import { useTranslation } from 'react-i18next';

import { DefaultButton } from '@/components';
import { ValidationError } from '@/components/SearchPanel/styles';
import { schema } from '@/config/fullFormSchema';
import useSubscribe from '@/hooks/useSubscribe';
import { dictionary } from '@/types/constants';

import {
    FormComponent,
    InputComponent,
    InputContainer,
    InputGroup,
    LabelComponent,
    ServiceFormContainer,
} from './styles';

const {
    SUBSCRIBE_PLACEHOLDER,
    NAME_INPUT_PLACEHOLDER,
    THEME_INPUT_PLACEHOLDER,
    MESSAGE_INPUT_PLACEHOLDER,
    SUBSCRIBE_BUTTON_VALUE,
    NAME_TITLE,
    EMAIL_TITLE,
    MESSAGE_TITLE,
    THEME_TITLE,
} = dictionary;

interface IFormProps {
    type: 'column' | 'group';
}

const Form = ({ type }: IFormProps) => {
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
        <ServiceFormContainer>
            <FormComponent
                type={type}
                ref={formRef}
                onSubmit={handleSubmit(handleChange)}
            >
                <InputGroup type={type}>
                    <InputContainer>
                        <LabelComponent
                            error={errors.name?.message}
                            htmlFor="name"
                        >
                            {t(NAME_TITLE)}
                        </LabelComponent>
                        <InputComponent
                            error={errors.name?.message}
                            {...register('name')}
                            placeholder={t(NAME_INPUT_PLACEHOLDER)!}
                            id="name"
                            name="name"
                            type="text"
                        />
                        <ValidationError>
                            {t(errors.name?.message as string)}
                        </ValidationError>
                    </InputContainer>
                    <InputContainer>
                        <LabelComponent
                            error={errors.email?.message}
                            htmlFor="email"
                        >
                            {t(EMAIL_TITLE)}
                        </LabelComponent>
                        <InputComponent
                            error={errors.email?.message}
                            {...register('email')}
                            placeholder={t(SUBSCRIBE_PLACEHOLDER)!}
                            id="email"
                            name="email"
                            type="email"
                        />
                        <ValidationError>
                            {t(errors.email?.message as string)}
                        </ValidationError>
                    </InputContainer>
                </InputGroup>
                <InputContainer>
                    <LabelComponent
                        error={errors.theme?.message}
                        htmlFor="theme"
                    >
                        {t(THEME_TITLE)}
                    </LabelComponent>
                    <InputComponent
                        error={errors.theme?.message}
                        {...register('theme')}
                        placeholder={t(THEME_INPUT_PLACEHOLDER)!}
                        id="theme"
                        name="theme"
                        type="text"
                    />
                    <ValidationError>
                        {t(errors.theme?.message as string)}
                    </ValidationError>
                </InputContainer>
                <InputContainer>
                    <LabelComponent
                        error={errors.message?.message}
                        htmlFor="message"
                    >
                        {t(MESSAGE_TITLE)}
                    </LabelComponent>
                    <InputComponent
                        error={errors.message?.message}
                        {...register('message')}
                        placeholder={t(MESSAGE_INPUT_PLACEHOLDER)!}
                        id="message"
                        name="message"
                        type="text"
                    />
                    <ValidationError>
                        {t(errors.message?.message as string)}
                    </ValidationError>
                </InputContainer>
                <DefaultButton
                    disabled={!!Object.keys(errors).length || isDisabled}
                    type="submit"
                >
                    {t(SUBSCRIBE_BUTTON_VALUE)}
                </DefaultButton>
            </FormComponent>
        </ServiceFormContainer>
    );
};

export default Form;
