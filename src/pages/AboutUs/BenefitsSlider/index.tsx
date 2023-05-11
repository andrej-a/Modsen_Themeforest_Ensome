import React from 'react';

import { SliderComponent } from '@/components';
import { ServiceCard } from '@/componentsLibrary';
import service from '@/config/services';

import { ComponentContainer } from './styles';

const BenefitsSliderMobile = () => {
    return (
        <ComponentContainer>
            <SliderComponent
                countOfTheCards={1}
                title="Why our clients
chosse Ensome?"
                description="Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
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
                {service.map(serv => {
                    return <ServiceCard type="center text" content={serv} />;
                })}
            </SliderComponent>
        </ComponentContainer>
    );
};

export default BenefitsSliderMobile;
