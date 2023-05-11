import React from 'react';

import {
    ContactUsSection,
    Content,
    Header,
    LightFooter,
    PageContainer,
    PageTitleWithLightBlueBackground,
    SubscribeSection,
} from '@/components';
import { useAppSelector } from '@/hooks/useStore';
import { solutionSelector } from '@/store/selectors/selectors';

import SolutionContent from './Content';

const SolutionsSinglePage = () => {
    const {
        currentSolutionPage: { title },
    } = useAppSelector(solutionSelector);
    return (
        <PageContainer>
            <Header background="background">
                <Content />
            </Header>
            <PageTitleWithLightBlueBackground title={title} />
            <SolutionContent />
            <ContactUsSection />
            <SubscribeSection type="light" />
            <LightFooter />
        </PageContainer>
    );
};

export default SolutionsSinglePage;
