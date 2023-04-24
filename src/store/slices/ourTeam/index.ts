import { TPayload } from '@/types/componentsOptions';
import { namesOfTheSlices } from '@/types/constants';
import ITeamMember from '@/types/IPerson';
import { ISolution } from '@/types/ISolution';
import { createSlice } from '@reduxjs/toolkit';

const { OUR_TEAM_SLICE } = namesOfTheSlices;

export const initialState = {
    currentPerson: {} as ITeamMember,
};

const ourTeamSlice = createSlice({
    name: OUR_TEAM_SLICE,
    initialState,
    reducers: {
        setCurrentPerson: (state, { payload }: TPayload<ITeamMember>) => {
            state.currentPerson = payload;
        },
    },
});

const { actions, reducer } = ourTeamSlice;
export const { setCurrentPerson } = actions;
export default reducer;
