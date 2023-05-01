import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ImageComponent, ReadMoreComponent } from '@/components';
import {
    IService,
    ServiceCardProps,
} from '@/componentsLibrary/ServiceCard/types/IService';
import { useAppDispatch } from '@/hooks/useStore';
import { setServicePage } from '@/store/slices/serviceSlice';
import { setCurrentSolutionPage } from '@/store/slices/solutions';
import { ISolution } from '@/types/ISolution';

import {
    CardContainer,
    DescriptionContainer,
    ImageContainer,
    ReadMoreContainer,
    TitleContainer,
} from './styles';

const ServiceCard = memo(({ type, content }: ServiceCardProps) => {
    const { image, glassImage, title, description, link } = content;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const onSetPage = (content: IService | ISolution) => () => {
        if ((content as IService).content !== undefined) {
            dispatch(setServicePage(content as IService));
        } else {
            dispatch(setCurrentSolutionPage(content as ISolution));
        }
    };

    return (
        <CardContainer data-test="serviceCard" type={type}>
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
});

export default ServiceCard;
