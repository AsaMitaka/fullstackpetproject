import { createSlice } from '@reduxjs/toolkit';
import axios from '../../middleware/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const { data } = await axios.get('/post/all');

  return data;
});

export const fetchDeletePost = createAsyncThunk('posts/fetchDeletePost', async (id) => {
  await axios.delete(`/post/${id}`);
});

const initialState = {
  posts: [],
  status: 'loading',
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDeletePost.pending, (state, action) => {
      state.posts = state.posts.filter((obj) => obj._id !== action.meta.arg);
    });

    builder.addCase(fetchPosts.pending, (state, action) => {
      state.posts = [];
      state.status = 'loading';
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.status = 'loaded';
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.posts = [];
      state.status = 'rejected';
    });
  },
});

// export const {} = postsSlice.actions;
export default postsSlice.reducer;
