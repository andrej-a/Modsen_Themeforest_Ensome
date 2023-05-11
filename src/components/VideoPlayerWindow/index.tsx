import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

const VideoPlayerWindow = () => {
    const onPlayerReady: YouTubeProps['onReady'] = event => {
        event.target.pauseVideo();
    };

    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return (
        <YouTube videoId="0c6OTs_cXRs" opts={opts} onReady={onPlayerReady} />
    );
};

export default VideoPlayerWindow;
