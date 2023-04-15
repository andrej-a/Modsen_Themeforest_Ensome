import React from 'react';

import { ButtonProps } from '@/types/componentsOptions';

import { DefaultButtonElement, DefaultButtonWrapper } from './styles';

const DefaultButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
    return (
        <DefaultButtonWrapper>
            <DefaultButtonElement {...rest}>
                {children || 'Discover more'}
            </DefaultButtonElement>
        </DefaultButtonWrapper>
    );
};

export default DefaultButton;
