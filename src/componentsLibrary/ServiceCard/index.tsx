import React from 'react';
import { useTranslation } from 'react-i18next';

import { ImageComponent, ReadMoreComponent } from '@/components';
import { useAppDispatch } from '@/hooks/useStore';
import { setServicePage } from '@/store/slices/serviceSlice';
import { IService, ServiceCardProps } from '@/types/componentsOptions';

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
    const dispatch = useAppDispatch();
    const onSetService = (service: IService) => () => {
        dispatch(setServicePage(service));
    };
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
            <ReadMoreContainer type={type} onClick={onSetService(content)}>
                <ReadMoreComponent link={`service/${title}`} />
            </ReadMoreContainer>
        </CardContainer>
    );
};

export default ServiceCard;
