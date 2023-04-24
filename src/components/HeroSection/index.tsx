import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import HeroSectionImage from '@/assets/images/pictures/heroSection.png';
import { ImageComponent, RoundButton } from '@/components';
import { dictionary, linksConstants } from '@/types/constants';

import {
    HeroSectionContainer,
    HeroSectionContentContainer,
    HeroSectionDescription,
    HeroSectionDescriptionContainer,
    HeroSectionImageContainer,
    HeroSectionTitle,
    HeroSectionTitleContainer,
    LearnMoreButton,
} from './styles';

const { FIND_POWER, HEROES_SECTION_DESCRIPTION, LEARN_MORE, ENSOME } =
    dictionary;
const { SERVICES_PAGE } = linksConstants;
const HeroSection = () => {
    const { t } = useTranslation();
    return (
        <HeroSectionContainer>
            <HeroSectionContentContainer>
                <HeroSectionTitleContainer>
                    <HeroSectionTitle>
                        {t(FIND_POWER)} <span>{ENSOME}</span>
                    </HeroSectionTitle>
                </HeroSectionTitleContainer>
                <HeroSectionDescriptionContainer>
                    <HeroSectionDescription>
                        {t(HEROES_SECTION_DESCRIPTION)}
                    </HeroSectionDescription>
                </HeroSectionDescriptionContainer>
                <Link to={SERVICES_PAGE}>
                    <LearnMoreButton>
                        <RoundButton>{t(LEARN_MORE)}</RoundButton>
                    </LearnMoreButton>
                </Link>
            </HeroSectionContentContainer>
            <HeroSectionImageContainer>
                <ImageComponent source={HeroSectionImage} />
            </HeroSectionImageContainer>
        </HeroSectionContainer>
    );
};

export default HeroSection;
