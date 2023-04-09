import React from 'react';

import {
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
        </MainPageContainer>
    );
};

export default MainPage;
