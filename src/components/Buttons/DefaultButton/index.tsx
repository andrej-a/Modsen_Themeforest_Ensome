import React, { memo } from 'react';

import { DefaultButtonElement, DefaultButtonWrapper } from './styles';
import { ButtonProps } from './types';

const DefaultButton: React.FC<ButtonProps> = memo(({ children, ...rest }) => {
    return (
        <DefaultButtonWrapper>
            <DefaultButtonElement {...rest}>
                {children || 'Discover more'}
            </DefaultButtonElement>
        </DefaultButtonWrapper>
    );
});

export default DefaultButton;
