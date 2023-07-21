import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../middleware/axios';

export const fetchMyPost = createAsyncThunk('posts/fetchMyPosts', async (userId) => {
  const { data } = await axios.get('/post/my', { params: { userId } });

  return data;
});

export const fetchPost = createAsyncThunk('posts/fetchPosts', async () => {
  const { data } = await axios.get('/post/all');

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
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.status = 'fulfilled';
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.posts = [];
      state.status = 'rejected';
    });
    builder.addCase(fetchMyPost.pending, (state, action) => {
      state.posts = [];
      state.status = 'loading';
    });
    builder.addCase(fetchMyPost.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.status = 'fulfilled';
    });
    builder.addCase(fetchMyPost.rejected, (state, action) => {
      state.posts = [];
      state.status = 'rejected';
    });
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
