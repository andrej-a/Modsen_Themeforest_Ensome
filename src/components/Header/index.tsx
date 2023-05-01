import React, { memo } from 'react';

import { HeaderContainer } from './styles';
import { IHeaderProps } from './types';

const Header = memo(({ children, background }: IHeaderProps) => {
    return (
        <HeaderContainer background={background}>{children}</HeaderContainer>
    );
});

export default Header;
