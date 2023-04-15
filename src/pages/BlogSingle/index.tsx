import React from 'react';

import { Content, Header, SingleBlogTitle } from '@/components';

import { SinglePageContainer } from './styles';

const BlogSingle = () => {
    return (
        <SinglePageContainer>
            <Header background="primary">
                <Content type="primary" />
            </Header>
            <SingleBlogTitle />
        </SinglePageContainer>
    );
};

export default BlogSingle;
