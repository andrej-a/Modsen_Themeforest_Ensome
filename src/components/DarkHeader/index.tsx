import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactSVG } from 'react-svg';

import FooterLogoWhite from '@/assets/images/logo/footerLogoWhite.png';
import { ImageComponent } from '@/components';
import { UIConstants, valuesOfTheSettings } from '@/types/constants';

import contactInfo from './config/contactInfo';
import footerLogoArray from './config/links';
import quickLinks from './config/quickLinks';
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
    Policy,
    QuickLinkContainer,
    ServiceContainer,
    Text,
    Title,
} from './styles';

const { QUICK_LINK, SERVICE, CONTACT_INFO, FOOTER_DESCRIPTION } =
    valuesOfTheSettings;
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
                    {quickLinks.map(link => {
                        return <p>{t(link)}</p>;
                    })}
                </QuickLinkContainer>
                <ServiceContainer>
                    <Title>{t(SERVICE)}</Title>
                    {services.map(service => {
                        return <p>{t(service)}</p>;
                    })}
                </ServiceContainer>
                <ContactInfoContainer>
                    <Title>{t(CONTACT_INFO)}</Title>
                    {Object.values(contactInfo).map(({ href, contact }) => {
                        return (
                            <p>
                                <Link href={href} target="_blank">
                                    {contact}
                                </Link>
                            </p>
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
