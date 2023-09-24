import { configureStore } from '@reduxjs/toolkit';
import articlesSlice from './slices/articlesSlice';

const rootReducer = {
  articles: articlesSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch