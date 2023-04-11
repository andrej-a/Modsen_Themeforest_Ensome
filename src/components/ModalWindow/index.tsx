import React, { memo } from 'react';
import { createPortal } from 'react-dom';

import CloseButton from '@/assets/images/logo/closeButton.png';
import { LogoComponent } from '@/components';
import { ModalWindowProps } from '@/types/componentsOptions';

import { CloseModalWindowButton, ModalWindowOverlay } from './styles';

const ModalWindow = memo(({ onClick, children }: ModalWindowProps) => {
    return createPortal(
        <ModalWindowOverlay onClick={onClick}>
            {children}
            <CloseModalWindowButton onClick={onClick}>
                <LogoComponent source={CloseButton} />
            </CloseModalWindowButton>
        </ModalWindowOverlay>,
        document.body,
    );
});

export default ModalWindow;
