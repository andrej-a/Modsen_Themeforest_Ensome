import React, { memo } from 'react';

import { ILogoComponentProps } from '../ImageComponent/types';
import { Logo, LogoContainer } from './style';

const LogoComponent = memo(({ source }: ILogoComponentProps) => {
    return (
        <LogoContainer>
            <Logo src={source} alt="company_logo" />
        </LogoContainer>
    );
});

export default LogoComponent;
