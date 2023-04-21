import React from 'react';
import { useTranslation } from 'react-i18next';

import { BreadCrumbs, ImageComponent } from '@/components';
import contactList from '@/config/contactList';
import { valuesOfTheSettings } from '@/types/constants';
import { getIcon } from '@/utils/cutString';

import ContactsPageForm from './Form';
import {
    BreadCrumbContainer,
    ContactItem,
    ContactItemWrapper,
    ContactLink,
    ContactsContainer,
    ContactsSectionContainer,
    ContactsSectionContent,
    ContactText,
    Description,
    FormContainer,
} from './styles';

const { CONTACTS_PAGE_TITLE } = valuesOfTheSettings;
const ContactsSection = () => {
    const { t } = useTranslation();
    return (
        <ContactsSectionContainer>
            <ContactsSectionContent>
                <BreadCrumbContainer>
                    <BreadCrumbs linkColor="grey" crumbColor="black" />
                </BreadCrumbContainer>
                <FormContainer>
                    <Description
                        dangerouslySetInnerHTML={{
                            __html: t(CONTACTS_PAGE_TITLE),
                        }}
                    />
                    <ContactsPageForm />
                </FormContainer>
                <ContactsContainer>
                    {Object.values(contactList).map(
                        ({ value, href, contact }) => {
                            return (
                                <ContactItemWrapper>
                                    <ContactItem>
                                        <ImageComponent
                                            source={getIcon(value)}
                                        />
                                        <ContactText>{t(value)}</ContactText>
                                    </ContactItem>
                                    <ContactLink href={href}>
                                        {contact}
                                    </ContactLink>
                                </ContactItemWrapper>
                            );
                        },
                    )}
                </ContactsContainer>
            </ContactsSectionContent>
        </ContactsSectionContainer>
    );
};

export default ContactsSection;
