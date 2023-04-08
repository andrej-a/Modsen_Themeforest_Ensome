import React from 'react';

import PlayVideo from '@/assets/images/logo/playVideo.png';
import { LogoComponent } from '@/components';
import { WatchVideoButtonProps } from '@/types/componentsOptions';

import { VideoButton, VideoButtonContainer } from './styles';

const WatchVideoButton = ({ onClick, children }: WatchVideoButtonProps) => {
    return (
        <VideoButtonContainer onClick={onClick}>
            <VideoButton>
                <LogoComponent source={PlayVideo} />
                {children}
            </VideoButton>
        </VideoButtonContainer>
    );
};

export default WatchVideoButton;
