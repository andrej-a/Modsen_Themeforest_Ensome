import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ModalWindow, VideoPlayerWindow, WatchVideoButton } from '@/components';
import { HeaderContentProps } from '@/types/componentsOptions';
import { dictionary } from '@/types/constants';

import { Container } from './styles';

const { WATCH_THE_DEMO } = dictionary;

const VideoPlayerHandler = ({ type }: HeaderContentProps) => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const onSetIsVideoOpen = (
        event: React.MouseEvent<HTMLElement>,
        status: boolean,
    ) => {
        event.stopPropagation();
        setIsVideoOpen(status);
    };
    useEffect(() => {
        document.documentElement.style.overflow = isVideoOpen ? 'hidden' : '';
    }, [isVideoOpen]);

    const { t } = useTranslation();

    return (
        <Container>
            <WatchVideoButton
                onClick={event => onSetIsVideoOpen(event, true)}
                type={type}
            >
                {t(WATCH_THE_DEMO)}
            </WatchVideoButton>

            {isVideoOpen && (
                <ModalWindow
                    onClick={event => {
                        event.stopPropagation();
                        onSetIsVideoOpen(event, false);
                    }}
                >
                    <VideoPlayerWindow />
                </ModalWindow>
            )}
        </Container>
    );
};

export default VideoPlayerHandler;
