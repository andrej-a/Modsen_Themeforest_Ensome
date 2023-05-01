import React, { memo } from 'react';

import { CardContainer, Description, Title } from './styles';
import INumberComponent from './types';

const NumberComponent = memo(
    ({
        settings: { type, mainColor, secondColor },
        content,
    }: INumberComponent) => {
        const { main, second } = content;
        return (
            <CardContainer type={type}>
                <Title type={type} color={mainColor}>
                    {main}
                </Title>
                <Description type={type} color={secondColor}>
                    {second}
                </Description>
            </CardContainer>
        );
    },
);

export default NumberComponent;
