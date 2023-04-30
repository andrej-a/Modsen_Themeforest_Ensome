import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import contactList from '@/config/contactList';
import links from '@/config/links';
import { dictionary } from '@/types/constants';

import services from '../config/service';
import { Link, LinksToPagesContainer, PageLink, Text, Title } from './styles';

const { QUICK_LINK, SERVICE, CONTACT_INFO } = dictionary;

const LinksToPages = () => {
    const { t } = useTranslation();
    return (
        <>
            <LinksToPagesContainer>
                <Title>{t(QUICK_LINK)}</Title>
                {links.map(({ id, link, title }) => {
                    return (
                        <NavLink key={id} to={link}>
                            <PageLink>{t(title)}</PageLink>
                        </NavLink>
                    );
                })}
            </LinksToPagesContainer>
            <LinksToPagesContainer>
                <Title>{t(SERVICE)}</Title>
                {services.map(service => {
                    return <Text key={service}>{t(service)}</Text>;
                })}
            </LinksToPagesContainer>
            <LinksToPagesContainer>
                <Title>{t(CONTACT_INFO)}</Title>
                {Object.values(contactList).map(({ href, contact }) => {
                    return (
                        <Text key={contact}>
                            <Link href={href} target="_blank">
                                {contact}
                            </Link>
                        </Text>
                    );
                })}
            </LinksToPagesContainer>
        </>
    );
};

export default LinksToPages;
