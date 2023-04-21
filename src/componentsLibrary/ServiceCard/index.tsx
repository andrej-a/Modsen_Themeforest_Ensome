import React from 'react';
import { useTranslation } from 'react-i18next';

import { ImageComponent, ReadMoreComponent } from '@/components';
import { useAppDispatch } from '@/hooks/useStore';
import { setServicePage } from '@/store/slices/serviceSlice';
import { IService, ServiceCardProps } from '@/types/IService';
import { ISolution } from '@/types/ISolution';

import {
    CardContainer,
    DescriptionContainer,
    ImageContainer,
    ReadMoreContainer,
    TitleContainer,
} from './styles';

const ServiceCard = ({ type, content }: ServiceCardProps) => {
    const { image, glassImage, title, description, link } = content;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const onSetPage = (content: IService | ISolution) => () => {
        if ((content as IService).content !== undefined) {
            dispatch(setServicePage(content as IService));
        } else {
            console.log('HERE');
        }
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
            <ReadMoreContainer type={type} onClick={onSetPage(content)}>
                <ReadMoreComponent link={link} />
            </ReadMoreContainer>
        </CardContainer>
    );
};

export default ServiceCard;
