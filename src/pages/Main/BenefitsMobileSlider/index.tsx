import React from 'react';
import { useTranslation } from 'react-i18next';

import { SliderComponent } from '@/components';
import { ServiceCard } from '@/componentsLibrary';
import service from '@/config/services';
import { dictionary } from '@/types/constants';

import { ComponentContainer } from './styles';

const { BENEFITS_DESCRIPTION, BENEFITS_TITLE } = dictionary;

const BenefitsMobileSlider = () => {
    const { t } = useTranslation();
    return (
        <ComponentContainer>
            <SliderComponent
                countOfTheCards={1}
                title={t(BENEFITS_TITLE)}
                description={t(BENEFITS_DESCRIPTION)}
                settings={{
                    isButtonsControls: false,
                    isDescription: true,
                    contentPosition: 'left',
                }}
                innerControls={{
                    isInclude: true,
                    cardsSize: 244,
                    innerGap: 36,
                    innerPadding: 16,
                    innerTransform: 280,
                }}
            >
                {service.map((serv, index) => {
                    return (
                        <ServiceCard key={index} type="small" content={serv} />
                    );
                })}
            </SliderComponent>
        </ComponentContainer>
    );
};

export default BenefitsMobileSlider;
