import React from 'react';
import { useTranslation } from 'react-i18next';

import FooterLogoWhite from '@/assets/images/logo/footerLogoWhite.png';
import { ImageComponent } from '@/components';
import { Switcher } from '@/componentsLibrary';
import useMobile from '@/hooks/useMobile';
import { dictionary, size, UIConstants } from '@/types/constants';

import DropDownMenuList, { ISettings } from '../DropDownMenuList';
import allLinksTogether from './config/allLinksTohether';
import FollowUs from './FollowUs';
import LinksToPages from './LinksToPages';
import SocialLinks from './SocialLinks';
import {
    AdditionalInformation,
    CompanyInforWrapper,
    ContentDescription,
    ContentDescriptionText,
    FooterContainer,
    FooterContent,
    Policy,
    Text,
} from './styles';

const { FOOTER_DESCRIPTION } = dictionary;
const { COMPANY_INFO, POLICY, TERMS } = UIConstants;

const { laptop } = size;
const DarkFooter = () => {
    const { t } = useTranslation();
    const { isMobile } = useMobile(laptop);

    return (
        <FooterContainer>
            <FooterContent>
                <ContentDescription>
                    <ImageComponent source={FooterLogoWhite} />
                    <ContentDescriptionText>
                        {t(FOOTER_DESCRIPTION)}
                    </ContentDescriptionText>
                    {isMobile ? null : <SocialLinks />}
                    <Switcher />
                </ContentDescription>
                {isMobile ? null : <LinksToPages />}
                {isMobile ? (
                    <DropDownMenuList settings={allLinksTogether} />
                ) : null}
            </FooterContent>
            {isMobile && <FollowUs />}
            <AdditionalInformation>
                {!isMobile && <>{COMPANY_INFO}</>}
                <Policy>
                    <Text>{POLICY}</Text> <Text>{TERMS}</Text>
                </Policy>
                {isMobile && (
                    <CompanyInforWrapper>{COMPANY_INFO}</CompanyInforWrapper>
                )}
            </AdditionalInformation>
        </FooterContainer>
    );
};

export default DarkFooter;
