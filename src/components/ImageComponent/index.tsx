import React from 'react';

import { LogoComponentProps } from '@/types/componentsOptions';

import { Image, ImageWrapper } from './styles';

const ImageComponent = ({ source }: LogoComponentProps) => {
    return (
        <ImageWrapper>
            <Image src={source} alt="application_image" />
        </ImageWrapper>
    );
};

export default ImageComponent;
