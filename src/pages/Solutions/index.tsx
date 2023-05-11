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
import useMobile from '@/hooks/useMobile';
import { dictionary, size } from '@/types/constants';

import Advantages from './Advantages';
import SolutionsPageContent from './Content';

const {
    SOLUTIONS,
    SOLUTIONS_PAGE_TITLE,
    SOLUTIONS_PAGE_DESCRIPTION,
    SOLUTION_PAGE_DESCRIPTION_MOBILE,
} = dictionary;
const { tablet } = size;
const SolutionsPage = () => {
    const { isMobile } = useMobile(tablet);
    return (
        <PageContainer>
            <Header background="white">
                <Content type="primary" />
            </Header>

            <PageTitle
                size="low"
                subTitle={SOLUTIONS}
                title={SOLUTIONS_PAGE_TITLE}
                description={
                    isMobile
                        ? SOLUTION_PAGE_DESCRIPTION_MOBILE
                        : SOLUTIONS_PAGE_DESCRIPTION
                }
            />
            <SolutionsPageContent />
            <Advantages />
            <TestimonialsSection />
            <ContactUsSection />
            <SubscribeSection type="dark" />
            <DarkFooter />
        </PageContainer>
    );
};

export default SolutionsPage;
