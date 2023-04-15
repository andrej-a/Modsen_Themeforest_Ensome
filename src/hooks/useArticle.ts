import { useEffect, useState } from 'react';

import { TBlogCards } from '@/config/blogCardsData';
import { blogSelector } from '@/store/selectors/selectors';

import { useAppSelector } from './useStore';

const useArticle = () => {
    const [index, setIndex] = useState(1);
    const { blogCards } = useAppSelector(blogSelector);
    const [visibleCards, setVisibleCards] = useState<TBlogCards>([]);
    const [isButtonVisible, setIsButtonVisible] = useState(true);

    const onHandleIndex = () => {
        setIndex(prevIndex => prevIndex + 1);
    };

    useEffect(() => {
        setVisibleCards(blogCards.slice(0, index * 9));
    }, []);

    useEffect(() => {
        setVisibleCards(blogCards.slice(0, index * 9));
        if (index * 9 >= blogCards.length) {
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
