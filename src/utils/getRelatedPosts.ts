import { TBlogCards } from '@/config/blogCardsData';
import { numberEnums } from '@/types/constants';

const { COUNT_OF_THE_CARDS_IN_BLOG_FLOW, COUNT_OF_THE_RELATED_POSTS } =
    numberEnums;

const getRelatedPosts = (
    blogCards: TBlogCards,
    tagsOfCurrentBlog: string[],
) => {
    const filtered = blogCards
        .slice(0, COUNT_OF_THE_CARDS_IN_BLOG_FLOW)
        .filter(card => {
            const cardTags = card.tagsArray || [];
            const commonTags = cardTags.filter(tag =>
                tagsOfCurrentBlog.includes(tag),
            );
            return commonTags.length > 0;
        });

    return filtered.slice(0, COUNT_OF_THE_RELATED_POSTS);
};

export default getRelatedPosts;
