import React, { memo } from 'react';

import { CardContainer, Description, Number } from './styles';
import { IStatisticCard } from './types';

const StatisticCard = memo(({ number, description }: IStatisticCard) => {
    return (
        <CardContainer>
            <Number>{number}</Number>
            <Description>{description}</Description>
        </CardContainer>
    );
});

export default StatisticCard;
