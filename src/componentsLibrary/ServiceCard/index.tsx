import React from 'react';
import { useTranslation } from 'react-i18next';

import { ImageComponent, ReadMoreComponent } from '@/components';
import { ServiceCardProps } from '@/types/componentsOptions';

import {
    CardContainer,
    DescriptionContainer,
    ImageContainer,
    ReadMoreContainer,
    TitleContainer,
} from './styles';

const ServiceCard = ({ type, content }: ServiceCardProps) => {
    const { image, glassImage, title, description } = content;
    const { t } = useTranslation();
    return (
        <CardContainer type={type}>
            <ImageContainer type={type}>
                <ImageComponent
                    source={type === 'wide glass icon' ? glassImage : image}
                />
            </ImageContainer>
            <TitleContainer type={type}>{t(title)}</TitleContainer>
            <DescriptionContainer type={type}>
                {t(description)}
            </DescriptionContainer>
            <ReadMoreContainer type={type}>
                <ReadMoreComponent link={title} />
            </ReadMoreContainer>
        </CardContainer>
    );
};

export default ServiceCard;
