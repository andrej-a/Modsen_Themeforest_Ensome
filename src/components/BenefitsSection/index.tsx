import React from 'react';
import { useTranslation } from 'react-i18next';

import { ImageComponent } from '@/components';
import benefitsInformation from '@/config/services';
import { valuesOfTheSettings } from '@/types/constants';

import {
    BenefitsCard,
    BenefitsCardDescription,
    BenefitsCardImage,
    BenefitsCards,
    BenefitsCardTitle,
    BenefitsContentContainer,
    BenefitsDescription,
    BenefitsDescriptionText,
    BenefitsDescriptionTitle,
    BenefitsSectionContainer,
} from './style';

const { BENEFITS_DESCRIPTION, BENEFITS_TITLE } = valuesOfTheSettings;

const BenefitsSection = () => {
    const { t } = useTranslation();
    return (
        <BenefitsSectionContainer>
            <BenefitsContentContainer>
                <BenefitsDescription>
                    <BenefitsDescriptionTitle>
                        {t(BENEFITS_TITLE)}
                    </BenefitsDescriptionTitle>
                    <BenefitsDescriptionText>
                        {t(BENEFITS_DESCRIPTION)}
                    </BenefitsDescriptionText>
                </BenefitsDescription>
                <BenefitsCards>
                    {benefitsInformation
                        .slice(0, 4)
                        .map(({ image, title, description }) => {
                            return (
                                <BenefitsCard key={title}>
                                    <BenefitsCardImage>
                                        <ImageComponent source={image} />
                                    </BenefitsCardImage>
                                    <BenefitsCardTitle>
                                        {t(title)}
                                    </BenefitsCardTitle>
                                    <BenefitsCardDescription>
                                        {t(description)}
                                    </BenefitsCardDescription>
                                </BenefitsCard>
                            );
                        })}
                </BenefitsCards>
            </BenefitsContentContainer>
        </BenefitsSectionContainer>
    );
};

export default BenefitsSection;
