import React from 'react';

import {
    BlogPageContent,
    Content,
    DarkFooter,
    DarkPageTitle,
    Header,
    SubscribeSection,
} from '@/components';
import { PageTitle } from '@/componentsLibrary';
import useMobile from '@/hooks/useMobile';
import { dictionary, size } from '@/types/constants';

import { BlogPageContainer } from './styles';

const { BLOG, BLOG_DESCRIPTION, BLOG_MOBILE_TITLE, BLOG_MOBILE_DESCRIPTION } =
    dictionary;
const { tablet } = size;
const Blog = () => {
    const { isMobile } = useMobile(tablet);
    return (
        <BlogPageContainer>
            <Header background="secondary">
                <Content type="secondary" />
            </Header>
            {!isMobile && (
                <DarkPageTitle
                    settings={{
                        size: 'small',
                        descriptionSize: 'small',
                    }}
                    title={BLOG}
                    description={BLOG_DESCRIPTION}
                />
            )}
            {isMobile && (
                <PageTitle
                    size="low"
                    subTitle={BLOG}
                    title={BLOG_MOBILE_TITLE}
                    description={BLOG_MOBILE_DESCRIPTION}
                />
            )}
            <BlogPageContent />
            <SubscribeSection type="dark" />
            <DarkFooter />
        </BlogPageContainer>
    );
};

export default Blog;
