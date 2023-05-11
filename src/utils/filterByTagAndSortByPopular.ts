import { IBlogCard } from '@/config/blogCardsData';
import { numberEnums } from '@/types/constants';

const { COUNT_OF_THE_CARDS_IN_BLOG_FLOW, COUNT_OF_THE_POPULAR_POSTS } =
    numberEnums;

const filterByTagAndSortByPopular = (cards: IBlogCard[], tags: string[]) => {
    const filtered = cards
        .slice(0, COUNT_OF_THE_CARDS_IN_BLOG_FLOW)
        .filter(card => {
            const cardTags = card.tagsArray || [];
            const commonTags = cardTags.filter(tag => tags.includes(tag));
            return commonTags.length > 0;
        });

    const sorted = filtered.sort((a, b) =>
        parseInt(a.countOfTheViews, 10) > parseInt(b.countOfTheViews, 10)
            ? -1
            : 1,
    );
    return sorted.slice(0, COUNT_OF_THE_POPULAR_POSTS);
};

export default filterByTagAndSortByPopular;
