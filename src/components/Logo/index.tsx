import React from 'react';

import { LogoComponentProps } from '@/types/componentsOptions';

import { Logo, LogoContainer } from './style';

const LogoComponent = ({ source }: LogoComponentProps) => {
    return (
        <LogoContainer>
            <Logo src={source} alt="company_logo" />
        </LogoContainer>
    );
};

export default LogoComponent;
