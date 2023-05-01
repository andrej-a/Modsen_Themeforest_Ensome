import { IService } from '@/componentsLibrary/ServiceCard/types/IService';
import service from '@/config/services';
import { TPayload } from '@/types/componentsOptions';
import { namesOfTheSlices } from '@/types/constants';
import { createSlice } from '@reduxjs/toolkit';

const { SERVICE_SLICE } = namesOfTheSlices;

export const initialState = {
    services: service,
    currentServicePage: {} as IService,
    searchingValue: '',
    currentLink: '',
};

const serviceSlice = createSlice({
    name: SERVICE_SLICE,
    initialState,
    reducers: {
        setServicePage: (state, { payload }: TPayload<IService>) => {
            state.currentServicePage = payload;
        },
        setSearchingValue: (state, { payload }: TPayload<string>) => {
            state.searchingValue = payload;
        },
        setCurrentLink: (state, { payload }: TPayload<string>) => {
            state.currentLink = payload;
        },
    },
});

const { actions, reducer } = serviceSlice;
export const { setServicePage, setSearchingValue, setCurrentLink } = actions;
export default reducer;
