import React from 'react';

import { IStatisticCard } from '@/types/componentsOptions';

import { CardContainer, Description, Number } from './styles';

const StatisticCard = ({ number, description }: IStatisticCard) => {
    return (
        <CardContainer>
            <Number>{number}</Number>
            <Description>{description}</Description>
        </CardContainer>
    );
};

export default StatisticCard;
