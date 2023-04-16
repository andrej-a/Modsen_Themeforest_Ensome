import React from 'react';

import { MainContent, MainContentContainer } from './styles';
import Text from './Text';

const MainContentSection = () => {
    return (
        <MainContentContainer>
            <MainContent>
                <Text />
            </MainContent>
        </MainContentContainer>
    );
};

export default MainContentSection;
