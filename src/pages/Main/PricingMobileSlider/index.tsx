import React from 'react';
import { useTranslation } from 'react-i18next';

import { SliderComponent } from '@/components';
import { PaymentCardProps } from '@/components/PricingSection';
import PricingCard from '@/components/PricingSection/Card';
import dataOfThePrices from '@/components/PricingSection/config';
import { dictionary } from '@/types/constants';

import { ComponentContainer } from './styles';

const { OUR_PRICING } = dictionary;
interface IPricingMobileSlider {
    onHandlePlan: (plan: PaymentCardProps) => () => void;
}
const PricingMobileSlider = ({ onHandlePlan }: IPricingMobileSlider) => {
    const { t } = useTranslation();
    return (
        <ComponentContainer>
            <SliderComponent
                countOfTheCards={1}
                title={t(OUR_PRICING)}
                description=""
                settings={{
                    isButtonsControls: false,
                    isDescription: false,
                    contentPosition: 'left',
                }}
                innerControls={{
                    isInclude: true,
                    cardsSize: 275,
                    innerGap: 36,
                    innerPadding: 16,
                    innerTransform: 310,
                }}
            >
                {dataOfThePrices.map(
                    ({ kindOfThePlan, cost, listOfServices }, index) => {
                        return (
                            <PricingCard
                                key={index}
                                isPaymentCard={false}
                                onHandlePlan={onHandlePlan}
                                kindOfThePlan={kindOfThePlan}
                                cost={cost}
                                listOfServices={listOfServices}
                            />
                        );
                    },
                )}
            </SliderComponent>
        </ComponentContainer>
    );
};

export default PricingMobileSlider;
