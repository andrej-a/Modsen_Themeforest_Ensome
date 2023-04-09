import React from 'react';

import { RoundButtonProps } from '@/types/componentsOptions';

import { DefaultButtonElement, DefaultButtonWrapper } from './styles';

const DefaultButton = ({ children, onClick }: RoundButtonProps) => {
    return (
        <DefaultButtonWrapper onClick={onClick}>
            <DefaultButtonElement>
                {children || 'Discover more'}
            </DefaultButtonElement>
        </DefaultButtonWrapper>
    );
};

export default DefaultButton;
