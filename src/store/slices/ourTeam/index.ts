import ITeamMember from '@/componentsLibrary/PersonCard/types/IPerson';
import { TPayload } from '@/types/componentsOptions';
import { namesOfTheSlices } from '@/types/constants';
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
