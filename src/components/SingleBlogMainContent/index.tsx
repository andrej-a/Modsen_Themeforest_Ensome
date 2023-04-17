import React from 'react';

import PopularPosts from './PopularPosts';
import SearchPanel from './SearchPanel';
import { MainContent, MainContentContainer, RightSideBar } from './styles';
import Text from './Text';

const MainContentSection = () => {
    return (
        <MainContentContainer>
            <MainContent>
                <Text />
                <RightSideBar>
                    <SearchPanel />
                    <PopularPosts />
                </RightSideBar>
            </MainContent>
        </MainContentContainer>
    );
};

export default MainContentSection;
