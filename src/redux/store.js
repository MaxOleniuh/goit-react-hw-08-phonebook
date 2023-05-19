import { configureStore } from '@reduxjs/toolkit';
import slice from './slice';
import filterSlice from './filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'toolkit',
  storage,
};

const persistedReducer = persistReducer(persistConfig, slice);

export const store = configureStore({
  reducer: { toolkit: persistedReducer, filter: filterSlice },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
