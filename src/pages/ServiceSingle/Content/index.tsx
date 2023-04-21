import React from 'react';

import { valuesOfTheSettings } from '@/types/constants';

import LeftSideBarContainer from './LeftSideBar';
import RightSideBarContainer from './RightSideBar';
import { SinglePageContent, SinglePageContentContainer } from './styles';

const ServiceSingleContent = () => {
    return (
        <SinglePageContentContainer>
            <SinglePageContent>
                <LeftSideBarContainer />
                <RightSideBarContainer />
            </SinglePageContent>
        </SinglePageContentContainer>
    );
};

export default ServiceSingleContent;
