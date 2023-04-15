import React from 'react';

import {
    BlogPageContent,
    BlogPagePreview,
    Content,
    DarkFooter,
    Header,
    SubscribeSection,
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
            <SubscribeSection type="dark" />
            <DarkFooter />
        </BlogPageContainer>
    );
};

export default Blog;
