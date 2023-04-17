import blogCardsData, { IBlogCard } from '@/config/blogCardsData';
import { TPayload } from '@/types/componentsOptions';
import { namesOfTheSlices } from '@/types/constants';
import { createSlice } from '@reduxjs/toolkit';

const { BLOG_SLICE } = namesOfTheSlices;

export const initialState = {
    blogCards: blogCardsData,
    currentBlog: {} as IBlogCard,
    tagFromSearchInput: '',
    tagsOfCurrentBlog: [] as string[],
};

const blogSlice = createSlice({
    name: BLOG_SLICE,
    initialState,
    reducers: {
        setCurrentTag: (state, { payload }: TPayload<string>) => {
            state.tagFromSearchInput = payload;
        },
        setCurrentBlog: (state, { payload }: TPayload<IBlogCard>) => {
            state.currentBlog = payload;
        },
        setTagsOfCurrentBlog: (state, { payload }: TPayload<string[]>) => {
            state.tagsOfCurrentBlog = payload;
        },
        setTagFromSearchInput: (state, { payload }: TPayload<string>) => {
            state.tagFromSearchInput = payload;
        },
    },
});

const { actions, reducer } = blogSlice;
export const {
    setCurrentTag,
    setCurrentBlog,
    setTagsOfCurrentBlog,
    setTagFromSearchInput,
} = actions;
export default reducer;
