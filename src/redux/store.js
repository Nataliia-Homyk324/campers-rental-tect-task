import { configureStore } from "@reduxjs/toolkit";
import catalogSlice from "./catalog/catalogSlice.js";
import filterSlice from "./filter/filterSlice.js";
import favoriteSlice from "./favorite/favoriteSlice.js";

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

const favoritePersistConfig = {
  key: 'favorite',
  storage,
  whitelist: ['favoriteList'],
};

const persistedFavoriteReducer = persistReducer(
  favoritePersistConfig,
  favoriteSlice
);

export const store = configureStore({
  reducer: {
    catalog: catalogSlice,
    filter: filterSlice,
    favorite: persistedFavoriteReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

