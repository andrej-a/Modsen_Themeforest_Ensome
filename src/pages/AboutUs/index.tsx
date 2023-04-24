import React from 'react';

import {
    Content,
    DarkFooter,
    Header,
    PageContainer,
    PageTitleWithLightBlueBackground,
    SubscribeSection,
} from '@/components';
import { dictionary } from '@/types/constants';

import ContactUs from './ContactUs';
import EnsomeInNumbers from './EnsomeInNumbersSection';
import Overview from './OverviewSection';
import Testimonials from './Testimonials';
import WhoWeAreSection from './WhoWeAreSection';

const { ABOUT_US } = dictionary;
const AboutUs = () => {
    return (
        <PageContainer>
            <Header background="background">
                <Content />
            </Header>
            <PageTitleWithLightBlueBackground title={ABOUT_US} />
            <WhoWeAreSection />
            <EnsomeInNumbers />
            <Overview />
            <Testimonials />
            <ContactUs />
            <SubscribeSection type="light" />
            <SubscribeSection type="primary" />
            <DarkFooter />
        </PageContainer>
    );
};

export default AboutUs;
