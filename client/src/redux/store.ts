import { configureStore } from '@reduxjs/toolkit';
import auth from './slices/authSlice';
import post from './slices/postSlice';

const store = configureStore({
  reducer: {
    auth,
    post,
  },
});

export default store;
