import React from 'react';

import { Content, FeatureSection, Header, HeroSection } from '@/components';

import { MainPageContainer } from './styles';

const MainPage = () => {
    return (
        <MainPageContainer>
            <Header>
                <Content />
            </Header>
            <HeroSection />
            <FeatureSection />
        </MainPageContainer>
    );
};

export default MainPage;
