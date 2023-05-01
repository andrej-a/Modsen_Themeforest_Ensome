import React, { memo } from 'react';

import { Container } from './styles';
import IPageContainerProps from './types';

const PageContainer = memo(({ children }: IPageContainerProps) => {
    return <Container>{children}</Container>;
});

export default PageContainer;
