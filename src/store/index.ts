import blogSlice from '@/store/slices/blog';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: { blogSlice },
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
