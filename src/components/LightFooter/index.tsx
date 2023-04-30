import React from 'react';
import { useTranslation } from 'react-i18next';

import Logo from '@/assets/images/logo/headerLogo.png';
import { ImageComponent } from '@/components';
import { Switcher } from '@/componentsLibrary';
import useMobile from '@/hooks/useMobile';
import { size, UIConstants } from '@/types/constants';

import allLinksTogether from '../DarkHeader/config/allLinksTohether';
import DropDownMenuList from '../DropDownMenuList';
import FollowUs from '../FollowUs';
import Contacts from './Contacts';
import Navigation from './Navigation';
import Privacy from './Privacy';
import { CompanyDescription, CompanyInfo } from './Privacy/styles';
import {
    AdditionalInfo,
    ApplicationNavigation,
    Container,
    Content,
    MobileDropDownContainer,
    PrivacyContainer,
    SwitcherContainer,
} from './styles';

const { tablet } = size;

const { COMPANY_INFO_SECONDARY, POLICY, TERMS } = UIConstants;

const LightFooter = () => {
    const { t } = useTranslation();
    const { isMobile } = useMobile(tablet);
    return (
        <Container>
            <Content>
                <ApplicationNavigation>
                    <SwitcherContainer>
                        <ImageComponent source={Logo} />
                        <Switcher />
                    </SwitcherContainer>
                    {!isMobile && <Navigation />}
                    {isMobile && (
                        <MobileDropDownContainer>
                            <DropDownMenuList
                                type="dark"
                                settings={allLinksTogether}
                            />
                        </MobileDropDownContainer>
                    )}
                </ApplicationNavigation>
                {isMobile && <FollowUs type="dark" />}
                {!isMobile && <Contacts />}
                {!isMobile && <Privacy />}
                {isMobile && (
                    <AdditionalInfo>
                        <PrivacyContainer>
                            <CompanyDescription>{t(POLICY)}</CompanyDescription>
                            <CompanyDescription>{t(TERMS)}</CompanyDescription>
                        </PrivacyContainer>
                        <CompanyInfo color="grey">
                            {t(COMPANY_INFO_SECONDARY)}
                        </CompanyInfo>
                    </AdditionalInfo>
                )}
            </Content>
        </Container>
    );
};

export default LightFooter;
