import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import blogSlice from '@/store/slices/blog';
import serviceSlice from '@/store/slices/serviceSlice';
import solutionSlice from '@/store/slices/solutions';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const persistConfig = {
    key: 'root_store',
    storage,
};
const rootReducer = combineReducers({
    blogSlice,
    serviceSlice,
    solutionSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export default store;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
