import { configureStore } from '@reduxjs/toolkit';
import newsSlice from './slices/newsSlice';

const rootReducer = {
  counter: newsSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;