import React from 'react';

import MobileImage from '@/assets/images/pictures/who_we_are_mobile.png';
import {
    ContactUsSection,
    Content,
    DarkFooter,
    Header,
    ImageComponent,
    OverviewSection,
    PageContainer,
    PageTitleWithLightBlueBackground,
    SubscribeSection,
} from '@/components';
import { PageTitle } from '@/componentsLibrary';
import useMobile from '@/hooks/useMobile';
import { dictionary, size } from '@/types/constants';

import BenefitsSliderMobile from './BenefitsSlider';
import ContactUs from './ContactUs';
import EnsomeInNumbers from './EnsomeInNumbersSection';
import Overview from './OverviewSection';
import { MobileImageContainer } from './styles';
import Testimonials from './Testimonials';
import WhoWeAreSection from './WhoWeAreSection';

const { ABOUT_US, ABOUT_US_MOBILE_TITLE, ABOUT_US_PAGE_MOBILE_DESCRIPTION } =
    dictionary;
const { mobileL } = size;
const AboutUs = () => {
    const { isMobile } = useMobile(mobileL);
    return (
        <PageContainer>
            <Header background="background">
                <Content />
            </Header>
            {!isMobile && <PageTitleWithLightBlueBackground title={ABOUT_US} />}
            {isMobile && (
                <PageTitle
                    size="low"
                    subTitle={ABOUT_US}
                    title={ABOUT_US_MOBILE_TITLE}
                    description={ABOUT_US_PAGE_MOBILE_DESCRIPTION}
                />
            )}
            {!isMobile && <WhoWeAreSection />}
            <MobileImageContainer>
                <ImageComponent source={MobileImage} />
            </MobileImageContainer>
            {!isMobile && <EnsomeInNumbers />}
            {isMobile && (
                <OverviewSection
                    background="background"
                    isClientsLogoShow={false}
                />
            )}
            {!isMobile && <Overview />}
            <BenefitsSliderMobile />
            <Testimonials />
            {!isMobile && <ContactUs />}
            {!isMobile && <SubscribeSection type="light" />}
            {isMobile && <ContactUsSection />}
            <SubscribeSection type="dark" />
            <DarkFooter />
        </PageContainer>
    );
};

export default AboutUs;
