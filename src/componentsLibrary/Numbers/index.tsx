import React from 'react';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();
    return (
        <CardContainer type={type}>
            <Title type={type} color={mainColor}>
                {t(main)}
            </Title>
            <Description type={type} color={secondColor}>
                {t(second)}
            </Description>
        </CardContainer>
    );
};

export default NumberComponent;
