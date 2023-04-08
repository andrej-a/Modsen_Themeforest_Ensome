import React from 'react';

import PlayVideo from '@/assets/images/logo/playVideo.png';
import PlayVideoDark from '@/assets/images/logo/playVideoDark.png';
import { LogoComponent } from '@/components';
import { WatchVideoButtonProps } from '@/types/componentsOptions';

import { VideoButton, VideoButtonContainer } from './styles';

const WatchVideoButton = ({
    type,
    onClick,
    children,
}: WatchVideoButtonProps) => {
    return (
        <VideoButtonContainer onClick={onClick}>
            <VideoButton btnType={type}>
                <LogoComponent
                    source={type === 'secondary' ? PlayVideoDark : PlayVideo}
                />
                {children}
            </VideoButton>
        </VideoButtonContainer>
    );
};

export default WatchVideoButton;
