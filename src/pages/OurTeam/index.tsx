import React from 'react';

import {
    Content,
    DarkFooter,
    DarkPageTitle,
    Header,
    PageContainer,
    SubscribeSection,
} from '@/components';
import { PageTitle } from '@/componentsLibrary';
import useMobile from '@/hooks/useMobile';
import { dictionary, size } from '@/types/constants';

import Team from './Team';
import TeamDescriptionMobile from './TeamDescriptionMobile';

const {
    OUR_TEAM,
    OUR_TEAM_DESCRIPTION,
    GET_TO_KNOW_US,
    ABOUT_US_MOBILE_DESCRIPTION,
} = dictionary;

const { tablet } = size;

const OurTeam = () => {
    const { isMobile } = useMobile(tablet);

    return (
        <PageContainer>
            <Header background="background">
                <Content />
            </Header>
            {!isMobile && (
                <DarkPageTitle
                    settings={{
                        size: 'medium',
                        descriptionSize: 'medium',
                    }}
                    title={OUR_TEAM}
                    description={OUR_TEAM_DESCRIPTION}
                />
            )}
            {isMobile && (
                <PageTitle
                    size="low"
                    subTitle={OUR_TEAM}
                    title={GET_TO_KNOW_US}
                    description={ABOUT_US_MOBILE_DESCRIPTION}
                />
            )}
            <TeamDescriptionMobile />
            <Team />
            <SubscribeSection type={isMobile ? 'light' : 'dark'} />
            <DarkFooter />
        </PageContainer>
    );
};

export default OurTeam;
