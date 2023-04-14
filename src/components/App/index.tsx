import React from 'react';
import { Route, Routes } from 'react-router-dom';

import links from '@/config/links';

import pages from './config/pages';
import { ApplicationContainer } from './styles';

const App = () => {
    return (
        <ApplicationContainer>
            <Routes>
                {links.map(({ link, id }, index) => {
                    return (
                        <Route key={id} path={link} element={pages[index]} />
                    );
                })}
            </Routes>
        </ApplicationContainer>
    );
};

export default App;
