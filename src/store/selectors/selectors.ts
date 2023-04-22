import { RootState } from '..';

export const blogSelector = (store: RootState) => store.blogSlice;
export const serviceSelector = (store: RootState) => store.serviceSlice;
export const solutionSelector = (store: RootState) => store.solutionSlice;
