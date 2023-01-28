import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeSlice';
import detailsReducer from './detailSlice';

const store = configureStore({
  reducer: {
    homeReducer,
    detailsReducer,
  },
});

export default store;
