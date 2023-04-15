import React from 'react';

import {
    BlogPageContent,
    BlogPagePreview,
    Content,
    Header,
} from '@/components';

import { BlogPageContainer } from './styles';

const Blog = () => {
    return (
        <BlogPageContainer>
            <Header background="secondary">
                <Content type="secondary" />
            </Header>
            <BlogPagePreview />
            <BlogPageContent />
        </BlogPageContainer>
    );
};

export default Blog;
