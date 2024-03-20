import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './slices/menuSlice';
import songDataReducer from './slices/songDataSlice';
const store = configureStore({
  reducer: {
    songDataReducer,
    menuReducer,
  },
});

export default store;
