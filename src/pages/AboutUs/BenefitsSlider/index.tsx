import React from 'react';

import { SliderComponent } from '@/components';
import { ServiceCard } from '@/componentsLibrary';
import service from '@/config/services';
import { dictionary } from '@/types/constants';

import { ComponentContainer } from './styles';

const { BENEFITS_SLIDER_TITLE, BENEFITS_SLIDER_DESCRIPTION } = dictionary;
const BenefitsSliderMobile = () => {
    return (
        <ComponentContainer>
            <SliderComponent
                countOfTheCards={1}
                title={BENEFITS_SLIDER_TITLE}
                description={BENEFITS_SLIDER_DESCRIPTION}
                settings={{
                    isButtonsControls: false,
                    isDescription: true,
                    contentPosition: 'center',
                }}
                innerControls={{
                    isInclude: true,
                    cardsSize: 275,
                    innerGap: 28,
                    innerPadding: 44,
                    innerTransform: 305,
                }}
            >
                {service.map((serv, index) => {
                    return (
                        <ServiceCard
                            key={index}
                            type="center text"
                            content={serv}
                        />
                    );
                })}
            </SliderComponent>
        </ComponentContainer>
    );
};

export default BenefitsSliderMobile;
