import React from 'react';
import { useTranslation } from 'react-i18next';

import { SubscribeSectionProps } from '@/types/componentsOptions';
import { dictionary } from '@/types/constants';

import {
    Description,
    FormContainer,
    SubscribeContainer,
    SubscribeContent,
    SubscribeDescription,
    Title,
} from './styles';
import SubscribeFormComponent from './SubscribeForm';

const { SUBSCRIBE_US, SUBSCRIBE_DESCRIPTION } = dictionary;

const SubscribeSection = ({ type }: SubscribeSectionProps) => {
    const { t } = useTranslation();
    return (
        <SubscribeContainer type={type}>
            <SubscribeContent>
                <SubscribeDescription>
                    <Title>{t(SUBSCRIBE_US)}</Title>
                    <Description>{t(SUBSCRIBE_DESCRIPTION)}</Description>
                </SubscribeDescription>
                <FormContainer>
                    <SubscribeFormComponent />
                </FormContainer>
            </SubscribeContent>
        </SubscribeContainer>
    );
};

export default SubscribeSection;
