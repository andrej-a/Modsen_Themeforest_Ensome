import service from '@/config/services';
import { IService, TPayload } from '@/types/componentsOptions';
import { namesOfTheSlices } from '@/types/constants';
import { createSlice } from '@reduxjs/toolkit';

const { SERVICE_SLICE } = namesOfTheSlices;

export const initialState = {
    services: service,
    currentServicePage: {} as IService,
    searchingValue: '',
};

const serviceSlice = createSlice({
    name: SERVICE_SLICE,
    initialState,
    reducers: {
        setServicePage: (state, { payload }: TPayload<IService>) => {
            state.currentServicePage = payload;
        },
    },
});

const { actions, reducer } = serviceSlice;
export const { setServicePage } = actions;
export default reducer;
