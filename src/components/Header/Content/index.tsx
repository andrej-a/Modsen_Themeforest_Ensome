import React from 'react';

import HeaderLogo from '@/assets/images/logo/headerLogo.png';
import { LogoComponent, WatchVideoButton } from '@/components/';

import { ContentContainer, MenuContainer, MenuItem } from './styles';

const Content = () => {
    return (
        <ContentContainer>
            <LogoComponent source={HeaderLogo} />
            <MenuContainer>
                <MenuItem>Houme</MenuItem>
                <MenuItem>Solutions</MenuItem>
                <MenuItem>Pages</MenuItem>
                <MenuItem>Elements</MenuItem>
                <MenuItem>Blog</MenuItem>
                <MenuItem>Contact</MenuItem>
            </MenuContainer>
            <WatchVideoButton>Watch the demo</WatchVideoButton>
        </ContentContainer>
    );
};

export default Content;
