import React from 'react';

import Categories from './Categories';
import PopularPosts from './PopularPosts';
import RelatedPosts from './RelatedPosts';
import SearchPanel from './SearchPanel';
import {
    LeftSideBar,
    MainContent,
    MainContentContainer,
    RightSideBar,
} from './styles';
import Tags from './TagsSection';
import Text from './Text';

const MainContentSection = () => {
    return (
        <MainContentContainer>
            <MainContent>
                <LeftSideBar>
                    <Text />
                    <RelatedPosts />
                </LeftSideBar>
                <RightSideBar>
                    <SearchPanel />
                    <PopularPosts />
                    <Categories />
                    <Tags />
                </RightSideBar>
            </MainContent>
        </MainContentContainer>
    );
};

export default MainContentSection;
