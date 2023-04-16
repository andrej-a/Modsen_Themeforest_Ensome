import React from 'react';

import {
    Content,
    Header,
    MainContentSection,
    SingleBlogTitle,
} from '@/components';

import { SinglePageContainer } from './styles';

const BlogSingle = () => {
    return (
        <SinglePageContainer>
            <Header background="primary">
                <Content type="primary" />
            </Header>
            <SingleBlogTitle />
            <MainContentSection />
        </SinglePageContainer>
    );
};

export default BlogSingle;
