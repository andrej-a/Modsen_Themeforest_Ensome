import React, { memo } from 'react';

import { ButtonProps } from '../DefaultButton/types';
import { RoundButtonContainer, RoundButtonElement } from './style';

const RoundButton: React.FC<ButtonProps> = memo(({ children, ...rest }) => {
    return (
        <RoundButtonContainer>
            <RoundButtonElement {...rest}>
                {children || 'Learn more'}
            </RoundButtonElement>
        </RoundButtonContainer>
    );
});

export default RoundButton;
