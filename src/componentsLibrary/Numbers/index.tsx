import React from 'react';

import { CardContainer, Description, Title } from './styles';

export interface ISettings {
    type: 'variant 1' | 'variant 4';
    mainColor: string;
    secondColor: string;
}
interface IContent {
    main: string;
    second: string;
}
interface INumberComponent {
    settings: ISettings;
    content: IContent;
}

const NumberComponent = ({
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
};

export default NumberComponent;
