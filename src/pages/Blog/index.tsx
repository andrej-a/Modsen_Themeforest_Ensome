import React from 'react';

import {
    BlogPageContent,
    Content,
    DarkFooter,
    DarkPageTitle,
    Header,
    SubscribeSection,
} from '@/components';
import { dictionary } from '@/types/constants';

import { BlogPageContainer } from './styles';

const { BLOG, BLOG_DESCRIPTION } = dictionary;

const Blog = () => {
    return (
        <BlogPageContainer>
            <Header background="secondary">
                <Content type="secondary" />
            </Header>
            <DarkPageTitle
                settings={{
                    size: 'small',
                    descriptionSize: 'small',
                }}
                title={BLOG}
                description={BLOG_DESCRIPTION}
            />
            <BlogPageContent />
            <SubscribeSection type="dark" />
            <DarkFooter />
        </BlogPageContainer>
    );
};

export default Blog;
