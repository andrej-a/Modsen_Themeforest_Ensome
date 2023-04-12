import React from 'react';

import {
    BenefitsSection,
    Content,
    FeatureSection,
    Header,
    HeroSection,
    OverviewSection,
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
        </MainPageContainer>
    );
};

export default MainPage;
