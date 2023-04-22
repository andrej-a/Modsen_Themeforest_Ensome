import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactSVG } from 'react-svg';

import Image from '@/assets/images/logo/contacts_arrow.png';
import { ImageComponent } from '@/components';
import footerLogoArray from '@/config/logoLinks';
import { dictionary } from '@/types/constants';

import { Title } from '../Navigation/styles';
import contacts from './config';
import {
    ContactsContainer,
    ContactsData,
    ContactsDataContainer,
    DataContainer,
    DataItem,
    DataLink,
    Social,
    SocialLink,
} from './styles';

const { CONTACTS, SOCIAL } = dictionary;

const Contacts = () => {
    const { t } = useTranslation();
    return (
        <ContactsContainer>
            <ContactsDataContainer>
                <Title>{t(CONTACTS)}</Title>
                <ContactsData>
                    {Object.values(contacts).map((value, index) => {
                        return (
                            <DataContainer key={index}>
                                {Object.values(value).map(
                                    ({ href, contact, isPrimary }) => {
                                        return (
                                            <DataItem key={contact}>
                                                <DataLink
                                                    isPrimary={isPrimary}
                                                    href={href}
                                                >
                                                    {contact}
                                                </DataLink>
                                                {isPrimary && (
                                                    <ImageComponent
                                                        source={Image}
                                                    />
                                                )}
                                            </DataItem>
                                        );
                                    },
                                )}
                            </DataContainer>
                        );
                    })}
                </ContactsData>
            </ContactsDataContainer>
            <ContactsDataContainer>
                <Title>{t(SOCIAL)}</Title>
                <Social>
                    {footerLogoArray.map((logo, index) => {
                        return (
                            <SocialLink
                                key={index}
                                href="https://www.google.com/"
                                target="_blank"
                            >
                                <ReactSVG src={logo} />
                            </SocialLink>
                        );
                    })}
                </Social>
            </ContactsDataContainer>
        </ContactsContainer>
    );
};

export default Contacts;
