import React from 'react';

import {
    Content,
    Header,
    LightFooter,
    PageContainer,
    PageTitleWithLightBlueBackground,
    SubscribeSection,
} from '@/components';
import { useAppSelector } from '@/hooks/useStore';
import { ourTeamSelector } from '@/store/selectors/selectors';

import FeedBack from './Form';
import PersonInformation from './PersonDescription';

const OurTeamSingle = () => {
    const {
        currentPerson: { name },
    } = useAppSelector(ourTeamSelector);
    return (
        <PageContainer>
            <Header background="background">
                <Content />
            </Header>
            <PageTitleWithLightBlueBackground isBreadCrumbsShort title={name} />
            <PersonInformation />
            <FeedBack />
            <SubscribeSection type="light" />
            <LightFooter />
        </PageContainer>
    );
};

export default OurTeamSingle;
