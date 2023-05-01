import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

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
import { SubscribeSectionProps } from './types';

const { SUBSCRIBE_US, SUBSCRIBE_DESCRIPTION } = dictionary;

const SubscribeSection = memo(({ type }: SubscribeSectionProps) => {
    const { t } = useTranslation();
    return (
        <SubscribeContainer type={type}>
            <SubscribeContent>
                <SubscribeDescription>
                    <Title>{t(SUBSCRIBE_US)}</Title>
                    <Description>{t(SUBSCRIBE_DESCRIPTION)}</Description>
                </SubscribeDescription>
                <FormContainer>
                    <SubscribeFormComponent componentType={type} />
                </FormContainer>
            </SubscribeContent>
        </SubscribeContainer>
    );
});

export default SubscribeSection;
