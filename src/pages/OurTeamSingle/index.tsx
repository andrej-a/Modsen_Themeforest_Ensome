import React from 'react';

import {
    Content,
    Header,
    LightFooter,
    PageContainer,
    PageTitleWithLightBlueBackground,
    SubscribeSection,
} from '@/components';
import { PageTitle } from '@/componentsLibrary';
import useMobile from '@/hooks/useMobile';
import { useAppSelector } from '@/hooks/useStore';
import { ourTeamSelector } from '@/store/selectors/selectors';
import { size } from '@/types/constants';

import FeedBack from './Form';
import PersonInformation from './PersonDescription';

const { tablet } = size;
const OurTeamSingle = () => {
    const {
        currentPerson: { name },
    } = useAppSelector(ourTeamSelector);
    const { isMobile } = useMobile(tablet);
    return (
        <PageContainer>
            <Header background="background">
                <Content />
            </Header>
            {!isMobile && (
                <PageTitleWithLightBlueBackground
                    isBreadCrumbsShort
                    title={name}
                />
            )}
            {isMobile && (
                <PageTitle size="low" subTitle="" title={name} description="" />
            )}
            <PersonInformation />
            <FeedBack />
            <SubscribeSection type="light" />
            <LightFooter />
        </PageContainer>
    );
};

export default OurTeamSingle;
