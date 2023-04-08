import React from 'react';

import { Content, Header } from '@/components';

import { ApplicationContainer } from './styles';

const App = () => {
    return (
        <ApplicationContainer>
            <Header>
                <Content />
            </Header>
        </ApplicationContainer>
    );
};

export default App;
