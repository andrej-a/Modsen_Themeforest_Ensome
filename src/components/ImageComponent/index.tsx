import React, { memo } from 'react';

import { Image, ImageWrapper } from './styles';
import { ILogoComponentProps } from './types';

const ImageComponent = memo(({ source }: ILogoComponentProps) => {
    return (
        <ImageWrapper>
            <Image src={source} alt="application_image" />
        </ImageWrapper>
    );
});

export default ImageComponent;
