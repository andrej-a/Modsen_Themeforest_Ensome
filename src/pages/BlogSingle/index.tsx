import React from 'react';

import {
    Content,
    DarkFooter,
    Header,
    MainContentSection,
    SingleBlogTitle,
    SubscribeSection,
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
            <SubscribeSection type="dark" />
            <DarkFooter />
        </SinglePageContainer>
    );
};

export default BlogSingle;
