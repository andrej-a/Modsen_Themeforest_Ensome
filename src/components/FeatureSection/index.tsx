import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import FeatureSectionImage from '@/assets/images/pictures/featuresSection.png';
import { DefaultButton, ImageComponent } from '@/components';
import { dictionary, linksConstants } from '@/types/constants';

import {
    FeatureSectionContainer,
    PlatformDescription,
    PlatformDescriptionContainer,
    PlatformDescriptionText,
    PlatformDescriptionTitle,
    PlatformInformationContainer,
    PlatformInformationImage,
    PlatformInformationText,
    PlatformInformationTextDescription,
    PlatformInformationTextTitle,
    TextContainer,
} from './styles';

const {
    DISCOVER_MORE,
    NEWEST_PLATFORM_DESCRIPTION,
    NEWEST_PLATFORM_START,
    NEWEST_PLATFORM_MIDDLE,
    NEWEST_PLATFORM_END,
    LEARN_MORE,
    NEW_SOLUTIONS,
    NEW_SOLUTIONS_DESCRIPTION,
} = dictionary;
const { SOLUTION_PAGE } = linksConstants;
const FeatureSection = () => {
    const { t } = useTranslation();
    return (
        <FeatureSectionContainer>
            <PlatformDescriptionContainer>
                <PlatformDescription>
                    <PlatformDescriptionTitle>
                        {t(NEWEST_PLATFORM_START)}{' '}
                        <span>{t(NEWEST_PLATFORM_MIDDLE)}</span>{' '}
                        {t(NEWEST_PLATFORM_END)}
                    </PlatformDescriptionTitle>
                    <TextContainer>
                        <PlatformDescriptionText>
                            {t(NEWEST_PLATFORM_DESCRIPTION)}
                        </PlatformDescriptionText>
                        <Link to={SOLUTION_PAGE}>
                            <DefaultButton>{t(DISCOVER_MORE)}</DefaultButton>
                        </Link>
                    </TextContainer>
                </PlatformDescription>
            </PlatformDescriptionContainer>
            <PlatformInformationContainer>
                <PlatformInformationImage>
                    <ImageComponent source={FeatureSectionImage} />
                </PlatformInformationImage>
                <PlatformInformationText>
                    <PlatformInformationTextTitle>
                        {t(NEW_SOLUTIONS)}
                    </PlatformInformationTextTitle>
                    <PlatformInformationTextDescription>
                        {t(NEW_SOLUTIONS_DESCRIPTION)}
                    </PlatformInformationTextDescription>
                    <Link to={SOLUTION_PAGE}>
                        <DefaultButton>{t(LEARN_MORE)}</DefaultButton>
                    </Link>
                </PlatformInformationText>
            </PlatformInformationContainer>
        </FeatureSectionContainer>
    );
};

export default FeatureSection;
