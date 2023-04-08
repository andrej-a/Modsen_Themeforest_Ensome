import React from 'react';

import HeroSectionImage from '@/assets/images/pictures/heroSection.png';
import { ImageComponent } from '@/components';

import {
    ColoredWord,
    HeroSectionContainer,
    HeroSectionContentContainer,
    HeroSectionDescription,
    HeroSectionDescriptionContainer,
    HeroSectionImageContainer,
    HeroSectionTitle,
    HeroSectionTitleContainer,
} from './styles';

const HeroSection = () => {
    return (
        <HeroSectionContainer>
            <HeroSectionContentContainer>
                <HeroSectionTitleContainer>
                    <HeroSectionTitle>
                        Find true power in your data with{' '}
                        <ColoredWord>Ensome</ColoredWord>
                    </HeroSectionTitle>
                </HeroSectionTitleContainer>
                <HeroSectionDescriptionContainer>
                    <HeroSectionDescription>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque lauda, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi.
                    </HeroSectionDescription>
                </HeroSectionDescriptionContainer>
            </HeroSectionContentContainer>
            <HeroSectionImageContainer>
                <ImageComponent source={HeroSectionImage} />
            </HeroSectionImageContainer>
        </HeroSectionContainer>
    );
};

export default HeroSection;
