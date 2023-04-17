import { useEffect, useState } from 'react';

import { IBlogCard } from '@/config/blogCardsData';
import { blogSelector } from '@/store/selectors/selectors';
import filterByTagAndSortByPopular from '@/utils/filterByTagAndSortByPopular';

import { useAppSelector } from './useStore';

const usePopularPosts = () => {
    const { tagsOfCurrentBlog, blogCards } = useAppSelector(blogSelector);
    const [
        filteredByTagAndSortedByPopularArray,
        setFilteredByTagAndSortedByPopularArray,
    ] = useState<IBlogCard[]>([]);

    useEffect(() => {
        setFilteredByTagAndSortedByPopularArray(
            filterByTagAndSortByPopular(blogCards, tagsOfCurrentBlog),
        );
    }, [tagsOfCurrentBlog]);

    return {
        filteredByTagAndSortedByPopularArray,
    };
};

export default usePopularPosts;
