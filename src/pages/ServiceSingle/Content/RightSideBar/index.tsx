import React from 'react';

import SearchServices from './SearchServices';
import ServiceDescription from './ServiceDescription';
import { RightSideBar } from './styles';

const RightSideBarContainer = () => {
    return (
        <RightSideBar>
            <SearchServices />
            <ServiceDescription />
        </RightSideBar>
    );
};

export default RightSideBarContainer;
