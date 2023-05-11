import React from 'react';
import { Route, Routes } from 'react-router-dom';

import links, { singlePagesLinks } from '@/config/links';

import pages from './config/pages';
import { ApplicationContainer } from './styles';

const setOfTheLinks = [...links, ...singlePagesLinks];

const App = () => {
    return (
        <ApplicationContainer>
            <Routes>
                {setOfTheLinks.map(({ link, id }, index) => {
                    return (
                        <Route key={id} path={link} element={pages[index]} />
                    );
                })}
            </Routes>
        </ApplicationContainer>
    );
};

export default App;
