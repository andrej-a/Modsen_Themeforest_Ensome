import React from 'react';

import {
    ContactUsSection,
    Content,
    DarkFooter,
    Header,
    PageContainer,
    SubscribeSection,
    TestimonialsSection,
} from '@/components';
import { PageTitle } from '@/componentsLibrary';
import { dictionary } from '@/types/constants';

import Advantages from './Advantages';
import SolutionsPageContent from './Content';

const { SOLUTIONS, SOLUTIONS_PAGE_TITLE, SOLUTIONS_PAGE_DESCRIPTION } =
    dictionary;

const SolutionsPage = () => {
    return (
        <PageContainer>
            <Header background="white">
                <Content type="primary" />
            </Header>
            <PageTitle
                size="low"
                subTitle={SOLUTIONS}
                title={SOLUTIONS_PAGE_TITLE}
                description={SOLUTIONS_PAGE_DESCRIPTION}
            />
            <SolutionsPageContent />
            <Advantages />
            <TestimonialsSection />
            <ContactUsSection />
            <SubscribeSection type="primary" />
            <DarkFooter />
        </PageContainer>
    );
};

export default SolutionsPage;
