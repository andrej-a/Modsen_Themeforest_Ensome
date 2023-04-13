import React from 'react';
import { useTranslation } from 'react-i18next';

import { valuesOfTheSettings } from '@/types/constants';

import PricingCard from './Card';
import dataOfThePrices from './config';
import {
    PricingSectionCards,
    PricingSectionContainer,
    PricingSectionContent,
    PricingSectionHeader,
} from './style';

const { OUR_PRICING } = valuesOfTheSettings;
const PricingSection = () => {
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
                                    kindOfThePlan={kindOfThePlan}
                                    cost={cost}
                                    listOfServices={listOfServices}
                                />
                            );
                        },
                    )}
                </PricingSectionCards>
            </PricingSectionContent>
        </PricingSectionContainer>
    );
};

export default PricingSection;
