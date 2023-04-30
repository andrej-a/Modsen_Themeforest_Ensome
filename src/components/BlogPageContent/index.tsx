import React from 'react';
import { useTranslation } from 'react-i18next';

import { DefaultButton } from '@/components';
import { BlogCard } from '@/componentsLibrary';
import useArticle from '@/hooks/useArticle';
import useMobile from '@/hooks/useMobile';
import { dictionary, size } from '@/types/constants';

import {
    BlogPageContentContainer,
    Content,
    ContentContainer,
    LoadButtonWrapper,
} from './styles';

const { MORE_ARTICLES, SEE_MORE } = dictionary;
const { mobileL } = size;

const BlogPageContent = () => {
    const { onHandleIndex, visibleCards, isButtonVisible } = useArticle();
    const { t } = useTranslation();
    const { isMobile } = useMobile(mobileL);
    return (
        <BlogPageContentContainer>
            <ContentContainer>
                <Content>
                    {visibleCards.map(card => {
                        const { id } = card;
                        return (
                            <BlogCard
                                key={id}
                                settings={{
                                    type: isMobile ? 'medium' : 'small',
                                }}
                                content={card}
                            />
                        );
                    })}
                </Content>
                <LoadButtonWrapper isButtonVisible={isButtonVisible}>
                    <DefaultButton
                        data-test="loadMoreArticles"
                        onClick={onHandleIndex}
                    >
                        {isMobile ? t(SEE_MORE) : t(MORE_ARTICLES)}
                    </DefaultButton>
                </LoadButtonWrapper>
            </ContentContainer>
        </BlogPageContentContainer>
    );
};

export default BlogPageContent;
