import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { DefaultButton } from '@/components';
import { dictionary, linksConstants } from '@/types/constants';

import {
    ContactUsContainer,
    ContactUsContent,
    ContactUsDescription,
    ContactUsTitle,
} from './styles';

const { IS_NEED_HELP, CONTACT_US_DESCRIPTION, CONTACT_US } = dictionary;
const { CONTACTS_PAGE } = linksConstants;
const ContactUsSection = () => {
    const { t } = useTranslation();
    return (
        <ContactUsContainer>
            <ContactUsContent>
                <ContactUsTitle>{t(IS_NEED_HELP)}</ContactUsTitle>
                <ContactUsDescription>
                    {t(CONTACT_US_DESCRIPTION)}
                </ContactUsDescription>
                <Link to={CONTACTS_PAGE}>
                    <DefaultButton>{t(CONTACT_US)}</DefaultButton>
                </Link>
            </ContactUsContent>
        </ContactUsContainer>
    );
};

export default ContactUsSection;
