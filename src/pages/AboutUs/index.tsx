import React from 'react';

import {
    Content,
    Header,
    PageContainer,
    PageTitleWithLightBlueBackground,
} from '@/components';
import { dictionary } from '@/types/constants';

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
        </PageContainer>
    );
};

export default AboutUs;
