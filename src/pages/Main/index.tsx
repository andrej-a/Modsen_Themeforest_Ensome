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
import useMobile from '@/hooks/useMobile';
import { size } from '@/types/constants';

import BenefitsMobileSlider from './BenefitsMobileSlider';
import PricingMobileSlider from './PricingMobileSlider';
import { MainPageContainer } from './styles';

const { mobileL } = size;
const MainPage = () => {
    const { isMobile } = useMobile(mobileL);
    return (
        <MainPageContainer>
            <Header background="primary">
                <Content type="primary" />
            </Header>
            <HeroSection />
            <FeatureSection />
            <OverviewSection background="white" isClientsLogoShow />
            {!isMobile && <BenefitsSection />}
            {isMobile && <BenefitsMobileSlider />}
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
