import React from 'react';

import { ButtonProps } from '@/types/componentsOptions';

import { RoundButtonContainer, RoundButtonElement } from './style';

const RoundButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
    return (
        <RoundButtonContainer>
            <RoundButtonElement {...rest}>
                {children || 'Learn more'}
            </RoundButtonElement>
        </RoundButtonContainer>
    );
};

export default RoundButton;
