import React from 'react';

import { RoundButtonProps } from '@/types/componentsOptions';

import { RoundButtonContainer, RoundButtonElement } from './style';

const RoundButton = ({ onClick, children }: RoundButtonProps) => {
    return (
        <RoundButtonContainer onClick={onClick}>
            <RoundButtonElement>{children || 'Learn more'}</RoundButtonElement>
        </RoundButtonContainer>
    );
};

export default RoundButton;
