import React from 'react';
import { useTranslation } from 'react-i18next';

import contactList from '@/config/contactList';
import { dictionary } from '@/types/constants';

import ContactUsForm from './Form';
import {
    Contact,
    ContactsContainer,
    ContactsData,
    Content,
    ContentContainer,
    Description,
    InformationContainer,
    InformationDescriptionContainer,
    Title,
} from './styles';

const { CONTACT_US_FORM, CONTACT_US_DESCRIPTION_FORM } = dictionary;
const ContactUs = () => {
    const { t } = useTranslation();
    return (
        <ContentContainer>
            <Content>
                <InformationContainer>
                    <InformationDescriptionContainer>
                        <Title>{t(CONTACT_US_FORM)}</Title>
                        <Description>
                            {t(CONTACT_US_DESCRIPTION_FORM)}
                        </Description>
                    </InformationDescriptionContainer>
                    <ContactsContainer>
                        {Object.values(contactList).map(
                            ({ description, href, contact }) => {
                                return (
                                    <ContactsData key={description}>
                                        <Description>
                                            {t(description)}
                                        </Description>
                                        <Contact href={href}>{contact}</Contact>
                                    </ContactsData>
                                );
                            },
                        )}
                    </ContactsContainer>
                </InformationContainer>
                <ContactUsForm />
            </Content>
        </ContentContainer>
    );
};

export default ContactUs;
