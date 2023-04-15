import localforage from 'localforage';

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
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const persistConfig = {
    key: 'root_store',
    storage: localforage,
};
const rootReducer = combineReducers({
    blogSlice,
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
