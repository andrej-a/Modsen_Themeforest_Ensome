import React from 'react';

import { Content, Header, HeroSection } from '@/components';

import { MainPageContainer } from './styles';

const MainPage = () => {
    return (
        <MainPageContainer>
            <Header>
                <Content />
            </Header>
            <HeroSection />
        </MainPageContainer>
    );
};

export default MainPage;
