import { useEffect, useState } from 'react';

import { TBlogCards } from '@/config/blogCardsData';
import { blogSelector } from '@/store/selectors/selectors';
import { numberEnums } from '@/types/constants';

import { useAppSelector } from './useStore';

const { COUNT_OF_THE_CARDS_IN_BLOG_FLOW } = numberEnums;
const useArticle = () => {
    const [index, setIndex] = useState(1);
    const { blogCards } = useAppSelector(blogSelector);
    const [visibleCards, setVisibleCards] = useState<TBlogCards>([]);
    const [isButtonVisible, setIsButtonVisible] = useState(true);

    const onHandleIndex = () => {
        setIndex(prevIndex => prevIndex + 1);
    };

    useEffect(() => {
        setVisibleCards(
            blogCards.slice(0, index * COUNT_OF_THE_CARDS_IN_BLOG_FLOW),
        );
    }, []);

    useEffect(() => {
        setVisibleCards(
            blogCards.slice(0, index * COUNT_OF_THE_CARDS_IN_BLOG_FLOW),
        );
        if (index * COUNT_OF_THE_CARDS_IN_BLOG_FLOW >= blogCards.length) {
            setIsButtonVisible(false);
        }
    }, [index]);

    return {
        onHandleIndex,
        visibleCards,
        isButtonVisible,
    };
};

export default useArticle;
