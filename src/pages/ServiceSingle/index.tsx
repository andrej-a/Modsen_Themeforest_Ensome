import React from 'react';

import {
    Content,
    DarkFooter,
    DarkPageTitle,
    Header,
    PageContainer,
    SubscribeSection,
} from '@/components';
import { useAppSelector } from '@/hooks/useStore';
import { serviceSelector } from '@/store/selectors/selectors';

import ContactFormComponent from './ContactForm';
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
            <ContactFormComponent />
            <SubscribeSection type="primary" />
            <DarkFooter />
        </PageContainer>
    );
};

export default ServiceSingle;
