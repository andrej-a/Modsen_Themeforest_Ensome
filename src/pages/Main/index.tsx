import React from 'react';

import {
    BenefitsSection,
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
        </MainPageContainer>
    );
};

export default MainPage;
