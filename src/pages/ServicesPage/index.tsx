import React from 'react';

import {
    ContactUsSection,
    Content,
    DarkFooter,
    Header,
    OverviewSection,
    PageContainer,
    ServiceContent,
    SubscribeSection,
} from '@/components';
import { PageTitle } from '@/componentsLibrary';
import useMobile from '@/hooks/useMobile';
import { dictionary, size } from '@/types/constants';

const { SERVICES, SERVICES_PAGE_TITLE, SERVICES_PAGE_DESCRIPTION } = dictionary;
const { mobileL } = size;
const Services = () => {
    const { isMobile } = useMobile(mobileL);
    return (
        <PageContainer>
            <Header background="primary">
                <Content />
            </Header>
            <PageTitle
                size={isMobile ? 'low' : 'medium'}
                subTitle={SERVICES}
                title={SERVICES_PAGE_TITLE}
                description={SERVICES_PAGE_DESCRIPTION}
            />
            <ServiceContent />
            <OverviewSection background="white" isClientsLogoShow />
            <ContactUsSection />
            <SubscribeSection type="dark" />
            <DarkFooter />
        </PageContainer>
    );
};

export default Services;
