import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Vector from '@/assets/images/logo/vector.png';
import VectorLight from '@/assets/images/logo/vectorLight.png';
import { DefaultButton, ImageComponent } from '@/components';
import { PricingCardProps } from '@/types/componentsOptions';
import { valuesOfTheSettings } from '@/types/constants';
import { getSummAroundYear } from '@/utils/getSummAroundYear';

import {
    CardContainer,
    ChoosePlanButtonContainer,
    CostAndTogglerContainer,
    KindOfThePlan,
    MonthToggler,
    ServiceItem,
    TogglersContainer,
    YearToggler,
} from './style';

const { CHOOSE_PLAN } = valuesOfTheSettings;
const PricingCard = ({
    kindOfThePlan,
    cost,
    listOfServices,
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

    const onHandleHover = () => {
        setIsCardHover(!isCardHover);
    };

    return (
        <CardContainer
            isCardHover={isCardHover}
            onMouseLeave={onHandleHover}
            onMouseEnter={onHandleHover}
        >
            <KindOfThePlan isCardHover={isCardHover}>
                {t(kindOfThePlan)}
            </KindOfThePlan>
            <CostAndTogglerContainer isCardHover={isCardHover}>
                ${currentCost}
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
            </CostAndTogglerContainer>
            <ChoosePlanButtonContainer isCardHover={isCardHover}>
                <DefaultButton>{t(CHOOSE_PLAN)}</DefaultButton>
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
