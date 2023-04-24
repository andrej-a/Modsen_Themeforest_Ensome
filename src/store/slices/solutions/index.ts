import { TPayload } from '@/types/componentsOptions';
import { namesOfTheSlices } from '@/types/constants';
import { ISolution } from '@/types/ISolution';
import { createSlice } from '@reduxjs/toolkit';

const { SOLUTION_SLICE } = namesOfTheSlices;

export const initialState = {
    currentSolutionPage: {} as ISolution,
    currentVisibleElement: '',
};

const solutionSlice = createSlice({
    name: SOLUTION_SLICE,
    initialState,
    reducers: {
        setCurrentSolutionPage: (state, { payload }: TPayload<ISolution>) => {
            state.currentSolutionPage = payload;
        },
        setCurrentVisibleElement: (state, { payload }: TPayload<string>) => {
            state.currentVisibleElement = payload;
        },
    },
});

const { actions, reducer } = solutionSlice;
export const { setCurrentSolutionPage, setCurrentVisibleElement } = actions;
export default reducer;
