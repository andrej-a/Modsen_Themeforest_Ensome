import React from 'react';

import {
    BenefitsSection,
    Content,
    FeatureSection,
    Header,
    HeroSection,
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
        </MainPageContainer>
    );
};

export default MainPage;
