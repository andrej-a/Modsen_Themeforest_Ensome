import blogCardsData from '@/config/blogCardsData';
import { TPayload } from '@/types/componentsOptions';
import { namesOfTheSlices } from '@/types/constants';
import { createSlice } from '@reduxjs/toolkit';

const { BLOG_SLICE } = namesOfTheSlices;

export const initialState = {
    blogCards: blogCardsData,
    currentBlog: '',
    currentTag: '',
};

const blogSlice = createSlice({
    name: BLOG_SLICE,
    initialState,
    reducers: {
        setCurrentTag: (state, { payload }: TPayload<string>) => {
            state.currentTag = payload;
        },
    },
});

const { actions, reducer } = blogSlice;
export const { setCurrentTag } = actions;
export default reducer;
