import React from 'react';
import { useTranslation } from 'react-i18next';

import { ServiceCard } from '@/componentsLibrary';
import service from '@/config/services';
import { setServicePage } from '@/store/slices/serviceSlice';
import { dictionary } from '@/types/constants';

import {
    BenefitsCards,
    BenefitsContentContainer,
    BenefitsDescription,
    BenefitsDescriptionText,
    BenefitsDescriptionTitle,
    BenefitsSectionContainer,
} from './style';

const { BENEFITS_DESCRIPTION, BENEFITS_TITLE } = dictionary;

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
                    {service.slice(0, 4).map((serv, index) => {
                        return (
                            <ServiceCard
                                key={index}
                                type="small"
                                content={serv}
                            />
                        );
                    })}
                </BenefitsCards>
            </BenefitsContentContainer>
        </BenefitsSectionContainer>
    );
};

export default BenefitsSection;
