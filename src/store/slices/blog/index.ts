import blogCardsData, { IBlogCard } from '@/config/blogCardsData';
import { TPayload } from '@/types/componentsOptions';
import { namesOfTheSlices } from '@/types/constants';
import { createSlice } from '@reduxjs/toolkit';

const { BLOG_SLICE } = namesOfTheSlices;

export const initialState = {
    blogCards: blogCardsData,
    currentBlog: {} as IBlogCard,
    currentTag: '',
};

const blogSlice = createSlice({
    name: BLOG_SLICE,
    initialState,
    reducers: {
        setCurrentTag: (state, { payload }: TPayload<string>) => {
            state.currentTag = payload;
        },
        setCurrentBlog: (state, { payload }: TPayload<IBlogCard>) => {
            state.currentBlog = payload;
        },
    },
});

const { actions, reducer } = blogSlice;
export const { setCurrentTag, setCurrentBlog } = actions;
export default reducer;
