import React from 'react';

import { HeaderProps } from '@/types/componentsOptions';

import { HeaderContainer } from './styles';

const Header = ({ children, background }: HeaderProps) => {
    return (
        <HeaderContainer background={background}>{children}</HeaderContainer>
    );
};

export default Header;
