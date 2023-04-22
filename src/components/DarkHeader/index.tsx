import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import FooterLogoWhite from '@/assets/images/logo/footerLogoWhite.png';
import { ImageComponent } from '@/components';
import contactList from '@/config/contactList';
import links from '@/config/links';
import footerLogoArray from '@/config/logoLinks';
import { dictionary, UIConstants } from '@/types/constants';

import services from './config/service';
import {
    AdditionalInformation,
    ContactInfoContainer,
    ContentDescription,
    ContentDescriptionText,
    ContentLinks,
    FooterContainer,
    FooterContent,
    Link,
    PageLink,
    Policy,
    QuickLinkContainer,
    ServiceContainer,
    Text,
    Title,
} from './styles';

const { QUICK_LINK, SERVICE, CONTACT_INFO, FOOTER_DESCRIPTION } = dictionary;
const { COMPANY_INFO, POLICY, TERMS } = UIConstants;
const DarkFooter = () => {
    const { t } = useTranslation();
    return (
        <FooterContainer>
            <FooterContent>
                <ContentDescription>
                    <ImageComponent source={FooterLogoWhite} />
                    <ContentDescriptionText>
                        {t(FOOTER_DESCRIPTION)}
                    </ContentDescriptionText>
                    <ContentLinks>
                        {footerLogoArray.map(logo => {
                            return (
                                <Link
                                    href="https://www.google.com/"
                                    target="_blank"
                                >
                                    <ReactSVG src={logo} />
                                </Link>
                            );
                        })}
                    </ContentLinks>
                </ContentDescription>
                <QuickLinkContainer>
                    <Title>{t(QUICK_LINK)}</Title>
                    {links.map(({ id, link, title }) => {
                        return (
                            <NavLink key={id} to={link}>
                                <PageLink>{t(title)}</PageLink>
                            </NavLink>
                        );
                    })}
                </QuickLinkContainer>
                <ServiceContainer>
                    <Title>{t(SERVICE)}</Title>
                    {services.map(service => {
                        return <Text>{t(service)}</Text>;
                    })}
                </ServiceContainer>
                <ContactInfoContainer>
                    <Title>{t(CONTACT_INFO)}</Title>
                    {Object.values(contactList).map(({ href, contact }) => {
                        return (
                            <Text>
                                <Link href={href} target="_blank">
                                    {contact}
                                </Link>
                            </Text>
                        );
                    })}
                </ContactInfoContainer>
            </FooterContent>
            <AdditionalInformation>
                {COMPANY_INFO}
                <Policy>
                    <Text>{POLICY}</Text> <Text>{TERMS}</Text>
                </Policy>
            </AdditionalInformation>
        </FooterContainer>
    );
};

export default DarkFooter;
