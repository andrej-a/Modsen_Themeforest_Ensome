import React from 'react';

import PopularPosts from './PopularPosts';
import { MainContent, MainContentContainer } from './styles';
import Text from './Text';

const MainContentSection = () => {
    return (
        <MainContentContainer>
            <MainContent>
                <Text />
                <PopularPosts />
            </MainContent>
        </MainContentContainer>
    );
};

export default MainContentSection;
