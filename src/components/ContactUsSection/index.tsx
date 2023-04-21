import React from 'react';
import { useTranslation } from 'react-i18next';

import { DefaultButton } from '@/components';
import { dictionary } from '@/types/constants';

import {
    ContactUsContainer,
    ContactUsContent,
    ContactUsDescription,
    ContactUsTitle,
} from './styles';

const { IS_NEED_HELP, CONTACT_US_DESCRIPTION, CONTACT_US } = dictionary;
const ContactUsSection = () => {
    const { t } = useTranslation();
    return (
        <ContactUsContainer>
            <ContactUsContent>
                <ContactUsTitle>{t(IS_NEED_HELP)}</ContactUsTitle>
                <ContactUsDescription>
                    {t(CONTACT_US_DESCRIPTION)}
                </ContactUsDescription>
                <DefaultButton>{t(CONTACT_US)}</DefaultButton>
            </ContactUsContent>
        </ContactUsContainer>
    );
};

export default ContactUsSection;
