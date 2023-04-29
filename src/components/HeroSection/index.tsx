import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import HeroSectionImageMobile from '@/assets/images/pictures/hero_section_mobile.png';
import HeroSectionImage from '@/assets/images/pictures/heroSection.png';
import { ImageComponent, RoundButton } from '@/components';
import useMobile from '@/hooks/useMobile';
import { dictionary, linksConstants, size } from '@/types/constants';

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

const {
    FIND_POWER,
    HEROES_SECTION_DESCRIPTION,
    HEROES_SECTION_DESCRIPTION_MOBILE,
    LEARN_MORE,
    ENSOME,
} = dictionary;
const { SERVICES_PAGE } = linksConstants;
const { tablet } = size;
const HeroSection = () => {
    const { t } = useTranslation();
    const { isMobile } = useMobile(tablet);
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
                        {isMobile
                            ? t(HEROES_SECTION_DESCRIPTION_MOBILE)
                            : t(HEROES_SECTION_DESCRIPTION)}
                    </HeroSectionDescription>
                </HeroSectionDescriptionContainer>
                <Link to={SERVICES_PAGE}>
                    <LearnMoreButton>
                        <RoundButton>{t(LEARN_MORE)}</RoundButton>
                    </LearnMoreButton>
                </Link>
            </HeroSectionContentContainer>
            <HeroSectionImageContainer>
                <ImageComponent
                    source={
                        isMobile ? HeroSectionImageMobile : HeroSectionImage
                    }
                />
            </HeroSectionImageContainer>
        </HeroSectionContainer>
    );
};

export default HeroSection;
