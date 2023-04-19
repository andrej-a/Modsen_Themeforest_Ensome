import React from 'react';

import { Content, DarkPageTitle, Header, PageContainer } from '@/components';
import { useAppSelector } from '@/hooks/useStore';
import { serviceSelector } from '@/store/selectors/selectors';

import ServiceSingleContent from './Content';

const ServiceSingle = () => {
    const {
        currentServicePage: { title, description },
    } = useAppSelector(serviceSelector);
    return (
        <PageContainer>
            <Header background="secondary">
                <Content type="secondary" />
            </Header>
            <DarkPageTitle title={title} description={description} />
            <ServiceSingleContent />
        </PageContainer>
    );
};

export default ServiceSingle;
