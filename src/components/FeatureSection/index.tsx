import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import FeatureSectionImage from '@/assets/images/pictures/featuresSection.png';
import SolutionsSectionImageMobile from '@/assets/images/pictures/main_page_mobile.png';
import { DefaultButton, ImageComponent } from '@/components';
import useMobile from '@/hooks/useMobile';
import { dictionary, linksConstants, size } from '@/types/constants';

import {
    FeatureSectionContainer,
    MobileImageContainer,
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
const { mobileL } = size;
const FeatureSection = () => {
    const { t } = useTranslation();
    const { isMobile } = useMobile(mobileL);
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
                    <MobileImageContainer>
                        <ImageComponent source={SolutionsSectionImageMobile} />
                    </MobileImageContainer>
                    <PlatformInformationTextDescription>
                        {t(NEW_SOLUTIONS_DESCRIPTION)}
                    </PlatformInformationTextDescription>
                    <Link to={SOLUTION_PAGE}>
                        <DefaultButton>
                            {isMobile ? t(DISCOVER_MORE) : t(LEARN_MORE)}
                        </DefaultButton>
                    </Link>
                </PlatformInformationText>
            </PlatformInformationContainer>
        </FeatureSectionContainer>
    );
};

export default FeatureSection;
