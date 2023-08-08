import { configureStore } from '@reduxjs/toolkit';
import posts from './slices/postsSlice';
import auth from './slices/authSlice';

const store = configureStore({
  reducer: {
    posts,
    auth,
  },
});

export default store;
