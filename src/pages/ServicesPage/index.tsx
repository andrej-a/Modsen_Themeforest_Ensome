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
import { valuesOfTheSettings } from '@/types/constants';

const { SERVICES, SERVICES_PAGE_TITLE, SERVICES_PAGE_DESCRIPTION } =
    valuesOfTheSettings;

const Services = () => {
    return (
        <PageContainer>
            <Header background="primary">
                <Content />
            </Header>
            <PageTitle
                size="medium"
                subTitle={SERVICES}
                title={SERVICES_PAGE_TITLE}
                description={SERVICES_PAGE_DESCRIPTION}
            />
            <ServiceContent />
            <OverviewSection />
            <ContactUsSection />
            <SubscribeSection type="primary" />
            <DarkFooter />
        </PageContainer>
    );
};

export default Services;
