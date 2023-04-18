import { useEffect, useState } from 'react';

import { IBlogCard } from '@/config/blogCardsData';
import { blogSelector } from '@/store/selectors/selectors';
import filterByTagAndSortByPopular from '@/utils/filterByTagAndSortByPopular';
import getRelatedPosts from '@/utils/getRelatedPosts';

import { useAppSelector } from './useStore';

const useRelatedPosts = () => {
    const { tagsOfCurrentBlog, blogCards } = useAppSelector(blogSelector);
    const [relatedPosts, setRelatedPosts] = useState<IBlogCard[]>([]);

    useEffect(() => {
        setRelatedPosts(getRelatedPosts(blogCards, tagsOfCurrentBlog));
    }, [tagsOfCurrentBlog]);

    return {
        relatedPosts,
    };
};

export default useRelatedPosts;
