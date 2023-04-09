import React from 'react';
import { useTranslation } from 'react-i18next';

import HeroSectionImage from '@/assets/images/pictures/heroSection.png';
import { ImageComponent, RoundButton } from '@/components';
import i18n from '@/settings/i18n';
import { valuesOfTheSettings } from '@/types/constants';

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

const { FIND_POWER, HEROES_SECTION_DESCRIPTION, LEARN_MORE } =
    valuesOfTheSettings;
const HeroSection = () => {
    const { t } = useTranslation();
    return (
        <HeroSectionContainer>
            <HeroSectionContentContainer>
                <HeroSectionTitleContainer>
                    <HeroSectionTitle>
                        {t(FIND_POWER)}{' '}
                        <span
                            onClick={() =>
                                i18n.language === 'ru'
                                    ? i18n.changeLanguage('en')
                                    : i18n.changeLanguage('ru')
                            }
                        >
                            Ensome
                        </span>
                    </HeroSectionTitle>
                </HeroSectionTitleContainer>
                <HeroSectionDescriptionContainer>
                    <HeroSectionDescription>
                        {t(HEROES_SECTION_DESCRIPTION)}
                    </HeroSectionDescription>
                </HeroSectionDescriptionContainer>
                <LearnMoreButton>
                    <RoundButton>{t(LEARN_MORE)}</RoundButton>
                </LearnMoreButton>
            </HeroSectionContentContainer>
            <HeroSectionImageContainer>
                <ImageComponent source={HeroSectionImage} />
            </HeroSectionImageContainer>
        </HeroSectionContainer>
    );
};

export default HeroSection;
