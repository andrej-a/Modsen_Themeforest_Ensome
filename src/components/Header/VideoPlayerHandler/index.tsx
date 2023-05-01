import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ModalWindow, VideoPlayerWindow, WatchVideoButton } from '@/components';
import { dictionary } from '@/types/constants';

import { HeaderContentProps } from '../types';
import { Container } from './styles';

const { WATCH_THE_DEMO } = dictionary;

const VideoPlayerHandler = memo(({ type }: HeaderContentProps) => {
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

        return () => {
            document.documentElement.style.overflow = '';
        };
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
});

export default VideoPlayerHandler;
