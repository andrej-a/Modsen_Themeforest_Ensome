import React from 'react';
import { useTranslation } from 'react-i18next';

import { BlogCard } from '@/componentsLibrary';
import useRelatedPosts from '@/hooks/useRelatedPosts';
import { valuesOfTheSettings } from '@/types/constants';

import { RelatedPostsContainer, RelatedPostsContent } from './styles';

const { NO_POSTS, RELATED_POSTS } = valuesOfTheSettings;

const RelatedPosts = () => {
    const { relatedPosts } = useRelatedPosts();
    const { t } = useTranslation();
    return (
        <RelatedPostsContainer>
            {t(RELATED_POSTS)}
            <RelatedPostsContent>
                {relatedPosts.length > 0
                    ? relatedPosts.map(post => {
                          return (
                              <BlogCard
                                  settings={{ type: 'right text' }}
                                  content={post}
                              />
                          );
                      })
                    : t(NO_POSTS)}
            </RelatedPostsContent>
        </RelatedPostsContainer>
    );
};

export default RelatedPosts;
