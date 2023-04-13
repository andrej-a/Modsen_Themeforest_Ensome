import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ModalWindow } from '@/components';
import { PricingCardProps } from '@/types/componentsOptions';
import { valuesOfTheSettings } from '@/types/constants';

import PricingCard from './Card';
import dataOfThePrices from './config';
import {
    PricingSectionCards,
    PricingSectionContainer,
    PricingSectionContent,
    PricingSectionHeader,
} from './styles';

export type PaymentCardProps = Pick<PricingCardProps, 'kindOfThePlan' | 'cost'>;
const { OUR_PRICING } = valuesOfTheSettings;
const PricingSection = () => {
    const [choosedPlan, setChoosedPlan] = useState<PaymentCardProps>({
        kindOfThePlan: '',
        cost: '',
    });
    const onHandlePlan = (plan: PaymentCardProps) => () => {
        setChoosedPlan(plan);
    };
    const { t } = useTranslation();
    return (
        <PricingSectionContainer>
            <PricingSectionContent>
                <PricingSectionHeader>{t(OUR_PRICING)}</PricingSectionHeader>
                <PricingSectionCards>
                    {dataOfThePrices.map(
                        ({ kindOfThePlan, cost, listOfServices }) => {
                            return (
                                <PricingCard
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
                        ({ kindOfThePlan, listOfServices }) => {
                            if (kindOfThePlan === choosedPlan.kindOfThePlan) {
                                return (
                                    <PricingCard
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
    );
};

export default PricingSection;
