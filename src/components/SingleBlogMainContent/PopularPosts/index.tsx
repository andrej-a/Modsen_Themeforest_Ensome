import React from 'react';
import { useTranslation } from 'react-i18next';

import { BlogCard } from '@/componentsLibrary';
import useMobile from '@/hooks/useMobile';
import usePopularPosts from '@/hooks/usePopularPosts';
import { dictionary, size } from '@/types/constants';

import { PopularPostsContainer, PopularPostsContent } from './styles';

const { POPULAR_POSTS, NO_POSTS } = dictionary;
const { tablet } = size;
const PopularPosts = () => {
    const { filteredByTagAndSortedByPopularArray } = usePopularPosts();
    const { t } = useTranslation();
    const { isMobile } = useMobile(tablet);
    return (
        <PopularPostsContainer>
            {t(POPULAR_POSTS)}
            <PopularPostsContent>
                {filteredByTagAndSortedByPopularArray.length > 0
                    ? filteredByTagAndSortedByPopularArray.map(
                          (card, index) => {
                              const {
                                  publishDate,
                                  blogTitle,
                                  firstContentPart,
                              } = card;
                              return (
                                  <BlogCard
                                      key={index}
                                      settings={{
                                          type: isMobile
                                              ? 'small'
                                              : 'without description',
                                      }}
                                      content={{
                                          ...card,
                                          publishDate: t(publishDate),
                                          blogTitle: t(blogTitle),
                                          firstContentPart: t(firstContentPart),
                                      }}
                                  />
                              );
                          },
                      )
                    : t(NO_POSTS)}
            </PopularPostsContent>
        </PopularPostsContainer>
    );
};

export default PopularPosts;
