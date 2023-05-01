import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ModalWindow } from '@/components';
import PricingMobileSlider from '@/pages/Main/PricingMobileSlider';
import { dictionary } from '@/types/constants';

import PricingCard from './Card';
import dataOfThePrices from './config';
import {
    PricingSectionCards,
    PricingSectionContainer,
    PricingSectionContent,
    PricingSectionHeader,
} from './styles';
import IPricingCardProps from './types';

export type PaymentCardProps = Pick<
    IPricingCardProps,
    'kindOfThePlan' | 'cost'
>;
const { OUR_PRICING } = dictionary;
const PricingSection = memo(() => {
    const [choosedPlan, setChoosedPlan] = useState<PaymentCardProps>({
        kindOfThePlan: '',
        cost: '',
    });
    const onHandlePlan = (plan: PaymentCardProps) => () => {
        setChoosedPlan(plan);
    };
    const { t } = useTranslation();
    return (
        <>
            <PricingSectionContainer>
                <PricingSectionContent>
                    <PricingSectionHeader>
                        {t(OUR_PRICING)}
                    </PricingSectionHeader>
                    <PricingSectionCards>
                        {dataOfThePrices.map(
                            (
                                { kindOfThePlan, cost, listOfServices },
                                index,
                            ) => {
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
                    </PricingSectionCards>
                </PricingSectionContent>
                {choosedPlan.kindOfThePlan && (
                    <ModalWindow
                        onClick={onHandlePlan({ kindOfThePlan: '', cost: '' })}
                    >
                        {dataOfThePrices.map(
                            ({ kindOfThePlan, listOfServices }, index) => {
                                if (
                                    kindOfThePlan === choosedPlan.kindOfThePlan
                                ) {
                                    return (
                                        <PricingCard
                                            key={index}
                                            isPaymentCard
                                            onHandlePlan={onHandlePlan}
                                            kindOfThePlan={kindOfThePlan}
                                            cost={choosedPlan.cost}
                                            listOfServices={listOfServices}
                                        />
                                    );
                                }
                            },
                        )}
                    </ModalWindow>
                )}
            </PricingSectionContainer>
            <PricingMobileSlider onHandlePlan={onHandlePlan} />
        </>
    );
});

export default PricingSection;
