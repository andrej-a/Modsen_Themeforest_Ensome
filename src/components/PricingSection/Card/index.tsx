import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Vector from '@/assets/images/logo/vector.png';
import VectorLight from '@/assets/images/logo/vectorLight.png';
import { DefaultButton, ImageComponent, ModalWindow } from '@/components';
import { PricingCardProps } from '@/types/componentsOptions';
import { dictionary } from '@/types/constants';
import { getSummAroundYear } from '@/utils/getSummAroundYear';
import { PayPalButtons } from '@paypal/react-paypal-js';

import PaymentModalWindow from '../PaymentModalWindow';
import {
    CardContainer,
    ChoosePlanButtonContainer,
    CostAndTogglerContainer,
    KindOfThePlan,
    MonthToggler,
    ServiceItem,
    TogglersContainer,
    YearToggler,
} from './styles';

const { CHOOSE_PLAN } = dictionary;
const PricingCard = ({
    isPaymentCard,
    kindOfThePlan,
    cost,
    listOfServices,
    onHandlePlan,
}: PricingCardProps) => {
    const { t } = useTranslation();
    const [currentCost, setCost] = useState(cost);
    const [period, setPeriod] = useState('Mo');
    const [isCardHover, setIsCardHover] = useState(false);

    const onHandlePeriod = (period: string) => () => {
        setPeriod(period);
        if (period === 'Mo') {
            setCost(cost);
        } else {
            setCost(`${getSummAroundYear(currentCost)}`);
        }
    };
    const onHandleHover = (status: boolean) => () => {
        setIsCardHover(status);
    };

    return (
        <CardContainer
            isCardHover={isCardHover}
            onMouseLeave={onHandleHover(false)}
            onMouseEnter={onHandleHover(true)}
        >
            <KindOfThePlan isCardHover={isCardHover}>
                {t(kindOfThePlan)}
            </KindOfThePlan>
            <CostAndTogglerContainer isCardHover={isCardHover}>
                ${currentCost}
                {isPaymentCard ? null : (
                    <TogglersContainer>
                        <MonthToggler
                            isCardHover={isCardHover}
                            period={period}
                            onClick={onHandlePeriod('Mo')}
                        >
                            Mo
                        </MonthToggler>
                        <YearToggler
                            isCardHover={isCardHover}
                            period={period}
                            onClick={onHandlePeriod('Yr')}
                        >
                            Yr
                        </YearToggler>
                    </TogglersContainer>
                )}
            </CostAndTogglerContainer>
            <ChoosePlanButtonContainer
                onClick={onHandlePlan({ kindOfThePlan, cost: currentCost })}
                isCardHover={isCardHover}
            >
                {isPaymentCard ? (
                    <PayPalButtons
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            value: `${+cost ? cost : '0.01'}`,
                                        },
                                    },
                                ],
                            });
                        }}
                    />
                ) : (
                    <DefaultButton>{t(CHOOSE_PLAN)}</DefaultButton>
                )}
            </ChoosePlanButtonContainer>
            {listOfServices.map(service => {
                return (
                    <ServiceItem isCardHover={isCardHover} key={cost}>
                        <ImageComponent
                            source={isCardHover ? VectorLight : Vector}
                        />
                        {t(service)}
                    </ServiceItem>
                );
            })}
        </CardContainer>
    );
};

export default PricingCard;
