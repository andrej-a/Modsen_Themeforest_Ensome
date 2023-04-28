import React from 'react';

import {
    BenefitsSection,
    ContactUsSection,
    Content,
    DarkFooter,
    FeatureSection,
    Header,
    HeroSection,
    OurBlogSection,
    OverviewSection,
    PricingSection,
    SubscribeSection,
    TestimonialsSection,
} from '@/components';

import { MainPageContainer } from './styles';

const MainPage = () => {
    return (
        <MainPageContainer>
            <Header background="primary">
                <Content type="primary" />
            </Header>
            <HeroSection />
            <FeatureSection />
            <OverviewSection background="white" isClientsLogoShow />
            <BenefitsSection />
            <TestimonialsSection />
            <PricingSection />
            <OurBlogSection />
            <ContactUsSection />
            <SubscribeSection type="dark" />
            <DarkFooter />
        </MainPageContainer>
    );
};

export default MainPage;
