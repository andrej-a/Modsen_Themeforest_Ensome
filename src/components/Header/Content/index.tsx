import React from 'react';

import HeaderLogo from '@/assets/images/logo/headerLogo.png';
import HeaderLogoWhite from '@/assets/images/logo/headerLogoWhite.png';
import { LogoComponent, WatchVideoButton } from '@/components/';
import { HeaderContentProps } from '@/types/componentsOptions';

import { ContentContainer, MenuContainer, MenuItem } from './styles';

const Content = ({ type }: HeaderContentProps) => {
    return (
        <ContentContainer>
            <LogoComponent
                source={type === 'secondary' ? HeaderLogoWhite : HeaderLogo}
            />
            <MenuContainer>
                <MenuItem type={type}>Home</MenuItem>
                <MenuItem type={type}>Solutions</MenuItem>
                <MenuItem type={type}>Pages</MenuItem>
                <MenuItem type={type}>Elements</MenuItem>
                <MenuItem type={type}>Blog</MenuItem>
                <MenuItem type={type}>Contact</MenuItem>
            </MenuContainer>
            <WatchVideoButton type={type}>Watch the demo</WatchVideoButton>
        </ContentContainer>
    );
};

export default Content;
