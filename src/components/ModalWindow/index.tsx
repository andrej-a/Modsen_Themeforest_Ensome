import React, { memo } from 'react';
import { createPortal } from 'react-dom';

import CloseButton from '@/assets/images/logo/closeButton.png';
import { LogoComponent } from '@/components';

import { CloseModalWindowButton, ModalWindowOverlay } from './styles';
import IModalWindowProps from './types';

const ModalWindow = memo(({ onClick, children }: IModalWindowProps) => {
    return createPortal(
        <ModalWindowOverlay data-test="modal" onClick={onClick}>
            {children}
            <CloseModalWindowButton onClick={onClick}>
                <LogoComponent source={CloseButton} />
            </CloseModalWindowButton>
        </ModalWindowOverlay>,
        document.body,
    );
});

export default ModalWindow;
