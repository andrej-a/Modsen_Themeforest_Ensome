import React from 'react';

import {
    BlogPageContent,
    Content,
    DarkFooter,
    DarkPageTitle,
    Header,
    SubscribeSection,
} from '@/components';
import { valuesOfTheSettings } from '@/types/constants';

import { BlogPageContainer } from './styles';

const { BLOG, BLOG_DESCRIPTION } = valuesOfTheSettings;

const Blog = () => {
    return (
        <BlogPageContainer>
            <Header background="secondary">
                <Content type="secondary" />
            </Header>
            <DarkPageTitle title={BLOG} description={BLOG_DESCRIPTION} />
            <BlogPageContent />
            <SubscribeSection type="dark" />
            <DarkFooter />
        </BlogPageContainer>
    );
};

export default Blog;
