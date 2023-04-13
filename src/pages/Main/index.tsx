import React from 'react';

import {
    BenefitsSection,
    ContactUsSection,
    Content,
    FeatureSection,
    Header,
    HeroSection,
    OurBlogSection,
    OverviewSection,
    PricingSection,
    TestimonialsSection,
} from '@/components';

import { MainPageContainer } from './styles';

const MainPage = () => {
    return (
        <MainPageContainer>
            <Header>
                <Content />
            </Header>
            <HeroSection />
            <FeatureSection />
            <OverviewSection />
            <BenefitsSection />
            <TestimonialsSection />
            <PricingSection />
            <OurBlogSection />
            <ContactUsSection />
        </MainPageContainer>
    );
};

export default MainPage;
