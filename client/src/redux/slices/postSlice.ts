import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPost = createAsyncThunk('posts/fetchPosts', async () => {
  const { data } = await axios.get('http://localhost:3000/api/post');
  return data;
});

const initialState = {
  posts: [],
  status: 'loading',
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state, action) => {
      state.posts = [];
      state.status = 'loading';
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.posts = [];
      state.status = 'rejected';
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.status = 'fulfilled';
    });
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
