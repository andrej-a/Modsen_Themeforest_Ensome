import React from 'react';
import { useTranslation } from 'react-i18next';

import FeatureSectionImage from '@/assets/images/pictures/featuresSection.png';
import { DefaultButton, ImageComponent } from '@/components';
import { valuesOfTheSettings } from '@/types/constants';

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
} = valuesOfTheSettings;
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
                        <DefaultButton>{t(DISCOVER_MORE)}</DefaultButton>
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
                    <DefaultButton>{t(LEARN_MORE)}</DefaultButton>
                </PlatformInformationText>
            </PlatformInformationContainer>
        </FeatureSectionContainer>
    );
};

export default FeatureSection;
