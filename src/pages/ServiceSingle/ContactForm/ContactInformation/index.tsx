import React from 'react';
import { useTranslation } from 'react-i18next';

import { ImageComponent } from '@/components';
import contactList from '@/config/contactList';
import { dictionary } from '@/types/constants';

import {
    ComponentContainer,
    ContactItem,
    ContactLink,
    ContactsListContainer,
    DescriptionContainer,
    TitleContainer,
} from './styles';

const { CONTACT_INFORMATION, CONTACT_SERVICE_DESCRIPTION } = dictionary;
const ContactInformation = () => {
    const { t } = useTranslation();
    return (
        <ComponentContainer>
            <TitleContainer>{t(CONTACT_INFORMATION)}</TitleContainer>
            <DescriptionContainer>
                {t(CONTACT_SERVICE_DESCRIPTION)}
            </DescriptionContainer>
            <ContactsListContainer>
                {Object.values(contactList).map(({ value, href, contact }) => {
                    return (
                        <ContactItem>
                            <ImageComponent
                                source={`../logo/${value.toLowerCase()}_services_icon.png`}
                            />
                            <ContactLink href={href}>{t(contact)}</ContactLink>
                        </ContactItem>
                    );
                })}
            </ContactsListContainer>
        </ComponentContainer>
    );
};

export default ContactInformation;
