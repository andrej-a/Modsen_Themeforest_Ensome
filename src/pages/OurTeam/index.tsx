import React from 'react';

import {
    Content,
    DarkFooter,
    DarkPageTitle,
    Header,
    PageContainer,
    SubscribeSection,
} from '@/components';
import { dictionary } from '@/types/constants';

import Team from './Team';

const { OUR_TEAM, OUR_TEAM_DESCRIPTION } = dictionary;

const OurTeam = () => {
    return (
        <PageContainer>
            <Header background="background">
                <Content />
            </Header>
            <DarkPageTitle
                settings={{
                    size: 'medium',
                    descriptionSize: 'medium',
                }}
                title={OUR_TEAM}
                description={OUR_TEAM_DESCRIPTION}
            />
            <Team />
            <SubscribeSection type="secondary" />
            <DarkFooter />
        </PageContainer>
    );
};

export default OurTeam;
