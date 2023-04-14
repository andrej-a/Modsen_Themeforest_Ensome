import React from 'react';

import { BlogPagePreview, Content, Header } from '@/components';

import { BlogPageContainer } from './styles';

const Blog = () => {
    return (
        <BlogPageContainer>
            <Header background="secondary">
                <Content type="secondary" />
            </Header>
            <BlogPagePreview />
        </BlogPageContainer>
    );
};

export default Blog;
