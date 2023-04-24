import React from 'react';

import {
    Content,
    DarkFooter,
    Header,
    MainContentSection,
    PageTitleWithLightBlueBackground,
    SubscribeSection,
} from '@/components';
import { useAppSelector } from '@/hooks/useStore';
import { blogSelector } from '@/store/selectors/selectors';

import { SinglePageContainer } from './styles';

const BlogSingle = () => {
    const {
        currentBlog: { blogTitle },
    } = useAppSelector(blogSelector);

    return (
        <SinglePageContainer>
            <Header background="primary">
                <Content type="primary" />
            </Header>
            <PageTitleWithLightBlueBackground title={blogTitle} />
            <MainContentSection />
            <SubscribeSection type="dark" />
            <DarkFooter />
        </SinglePageContainer>
    );
};

export default BlogSingle;
