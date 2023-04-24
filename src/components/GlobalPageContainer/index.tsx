import React from 'react';

import { PageContainerProps } from '@/types/componentsOptions';

import { Container } from './styles';

const PageContainer = ({ children }: PageContainerProps) => {
    return <Container>{children}</Container>;
};

export default PageContainer;
