import React from 'react';
import { useTranslation } from 'react-i18next';

import { BlogCard } from '@/componentsLibrary';
import useMobile from '@/hooks/useMobile';
import useRelatedPosts from '@/hooks/useRelatedPosts';
import { dictionary, size } from '@/types/constants';

import { RelatedPostsContainer, RelatedPostsContent } from './styles';

const { NO_POSTS, RELATED_POSTS } = dictionary;
const { tablet } = size;
const RelatedPosts = () => {
    const { relatedPosts } = useRelatedPosts();
    const { t } = useTranslation();
    const { isMobile } = useMobile(tablet);
    return (
        <RelatedPostsContainer>
            {t(RELATED_POSTS)}
            <RelatedPostsContent>
                {relatedPosts.length > 0
                    ? relatedPosts.map(post => {
                          const { publishDate, blogTitle, firstContentPart } =
                              post;
                          return (
                              <BlogCard
                                  settings={{
                                      type: isMobile ? 'small' : 'right text',
                                  }}
                                  content={{
                                      ...post,
                                      publishDate: t(publishDate),
                                      blogTitle: t(blogTitle),
                                      firstContentPart: t(firstContentPart),
                                  }}
                              />
                          );
                      })
                    : t(NO_POSTS)}
            </RelatedPostsContent>
        </RelatedPostsContainer>
    );
};

export default RelatedPosts;
