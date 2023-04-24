import React from 'react';
import { useTranslation } from 'react-i18next';

import Logo from '@/assets/images/logo/headerLogo.png';
import { ImageComponent } from '@/components';
import { Switcher } from '@/componentsLibrary';

import Contacts from './Contacts';
import Navigation from './Navigation';
import Privacy from './Privacy';
import {
    ApplicationNavigation,
    Container,
    Content,
    SwitcherContainer,
} from './styles';

const LightFooter = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <Content>
                <ApplicationNavigation>
                    <SwitcherContainer>
                        <ImageComponent source={Logo} />
                        <Switcher />
                    </SwitcherContainer>
                    <Navigation />
                </ApplicationNavigation>
                <Contacts />
                <Privacy />
            </Content>
        </Container>
    );
};

export default LightFooter;
