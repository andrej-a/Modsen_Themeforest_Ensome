import React from 'react';
import { useTranslation } from 'react-i18next';

import { BlogCard } from '@/componentsLibrary';
import usePopularPosts from '@/hooks/usePopularPosts';
import { valuesOfTheSettings } from '@/types/constants';

import { PopularPostsContainer, PopularPostsContent } from './styles';

const { POPULAR_POSTS, NO_POSTS } = valuesOfTheSettings;
const PopularPosts = () => {
    const { filteredByTagAndSortedByPopularArray } = usePopularPosts();
    const { t } = useTranslation();
    return (
        <PopularPostsContainer>
            {t(POPULAR_POSTS)}
            <PopularPostsContent>
                {filteredByTagAndSortedByPopularArray.length > 0
                    ? filteredByTagAndSortedByPopularArray.map(card => {
                          return (
                              <BlogCard
                                  settings={{ type: 'without description' }}
                                  content={card}
                              />
                          );
                      })
                    : t(NO_POSTS)}
            </PopularPostsContent>
        </PopularPostsContainer>
    );
};

export default PopularPosts;
