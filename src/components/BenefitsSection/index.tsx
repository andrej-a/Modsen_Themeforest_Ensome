import React from 'react';
import { useTranslation } from 'react-i18next';

import { ServiceCard } from '@/componentsLibrary';
import service from '@/config/services';
import { dictionary } from '@/types/constants';

import {
    Cards,
    ContentContainer,
    Description,
    DescriptionText,
    DescriptionTitle,
    SectionContainer,
} from './style';

const { BENEFITS_DESCRIPTION, BENEFITS_TITLE } = dictionary;

const BenefitsSection = () => {
    const { t } = useTranslation();
    return (
        <SectionContainer>
            <ContentContainer>
                <Description>
                    <DescriptionTitle>{t(BENEFITS_TITLE)}</DescriptionTitle>
                    <DescriptionText>{t(BENEFITS_DESCRIPTION)}</DescriptionText>
                </Description>
                <Cards>
                    {service.slice(0, 4).map((serv, index) => {
                        return (
                            <ServiceCard
                                key={index}
                                type="small"
                                content={serv}
                            />
                        );
                    })}
                </Cards>
            </ContentContainer>
        </SectionContainer>
    );
};

export default BenefitsSection;
