import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import MoonLoader from 'react-spinners/MoonLoader';
import { useTheme } from 'styled-components';

import { DefaultTheme } from '@/globalStyles';
import useMobile from '@/hooks/useMobile';
import useSubscribe from '@/hooks/useSubscribe';
import { dictionary, envConstants, size } from '@/types/constants';

import { ISubscribeFormComponent } from '../types';
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
const SubscribeFormComponent = memo(
    ({ componentType }: ISubscribeFormComponent) => {
        const { isMobile } = useMobile(tablet);
        const { t } = useTranslation();
        const theme = useTheme() as DefaultTheme;
        const {
            formRef,
            isDisabled,
            register,
            handleSubmit,
            errors,
            handleChange,
            isLoading,
        } = useSubscribe(schema, TEMPLATE_ID);
        return (
            <SubscribeForm ref={formRef} onSubmit={handleSubmit(handleChange)}>
                <SubscribeInput
                    componentType={componentType}
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
                        t(
                            isMobile ? SUBSCRIBE : SUBSCRIBE_BUTTON_VALUE,
                        ) as string
                    }
                />
                {isLoading && (
                    <MoonLoader
                        color={theme.colors.white}
                        size={theme.width.sl}
                    />
                )}
            </SubscribeForm>
        );
    },
);

export default SubscribeFormComponent;
