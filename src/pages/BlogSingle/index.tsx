import React from 'react';

import {
    Content,
    DarkFooter,
    Header,
    MainContentSection,
    PageTitleWithLightBlueBackground,
    SubscribeSection,
} from '@/components';
import { PageTitle } from '@/componentsLibrary';
import useMobile from '@/hooks/useMobile';
import { useAppSelector } from '@/hooks/useStore';
import { blogSelector } from '@/store/selectors/selectors';
import { size } from '@/types/constants';

import { SinglePageContainer } from './styles';

const { tablet } = size;
const BlogSingle = () => {
    const {
        currentBlog: { blogTitle },
    } = useAppSelector(blogSelector);
    const { isMobile } = useMobile(tablet);
    return (
        <SinglePageContainer>
            <Header background="primary">
                <Content type="primary" />
            </Header>
            {!isMobile && (
                <PageTitleWithLightBlueBackground title={blogTitle} />
            )}
            {isMobile && (
                <PageTitle
                    size="low"
                    subTitle=""
                    title={blogTitle}
                    description=""
                />
            )}
            <MainContentSection />
            <SubscribeSection type="dark" />
            <DarkFooter />
        </SinglePageContainer>
    );
};

export default BlogSingle;
