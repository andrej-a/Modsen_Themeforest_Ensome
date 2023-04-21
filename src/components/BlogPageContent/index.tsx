import React from 'react';
import { useTranslation } from 'react-i18next';

import { DefaultButton } from '@/components';
import { BlogCard } from '@/componentsLibrary';
import useArticle from '@/hooks/useArticle';
import { dictionary } from '@/types/constants';

import {
    BlogPageContentContainer,
    Content,
    ContentContainer,
    LoadButtonWrapper,
} from './styles';

const { MORE_ARTICLES } = dictionary;

const BlogPageContent = () => {
    const { onHandleIndex, visibleCards, isButtonVisible } = useArticle();
    const { t } = useTranslation();
    return (
        <BlogPageContentContainer>
            <ContentContainer>
                <Content>
                    {visibleCards.map(card => {
                        return (
                            <BlogCard
                                key={card.id}
                                settings={{ type: 'small' }}
                                content={card}
                            />
                        );
                    })}
                </Content>
                <LoadButtonWrapper isButtonVisible={isButtonVisible}>
                    <DefaultButton onClick={onHandleIndex}>
                        {t(MORE_ARTICLES)}
                    </DefaultButton>
                </LoadButtonWrapper>
            </ContentContainer>
        </BlogPageContentContainer>
    );
};

export default BlogPageContent;
