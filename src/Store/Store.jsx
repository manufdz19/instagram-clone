import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './Slices/AuthSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
