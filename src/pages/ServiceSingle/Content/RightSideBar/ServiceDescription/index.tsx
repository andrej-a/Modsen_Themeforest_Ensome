import React from 'react';
import { t } from 'i18next';

import Categories from '@/components/SingleBlogMainContent/Categories';
import { useAppSelector } from '@/hooks/useStore';
import { serviceSelector } from '@/store/selectors/selectors';
import { dictionary } from '@/types/constants';

import { ServiceSlideContainer, ServiceSlideTitle } from './styles';

const { SERVICES } = dictionary;

const ServiceDescription = () => {
    const { currentServicePage, services } = useAppSelector(serviceSelector);

    return (
        <ServiceSlideContainer>
            <ServiceSlideTitle>{t(SERVICES)}</ServiceSlideTitle>
            <Categories
                content={services.filter(
                    serv => serv.title !== currentServicePage.title,
                )}
            />
        </ServiceSlideContainer>
    );
};

export default ServiceDescription;
