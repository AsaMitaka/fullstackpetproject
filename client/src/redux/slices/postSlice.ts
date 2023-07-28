import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../middleware/axios';

export const fetchAllPost = createAsyncThunk('post/fetchAllPost', () => {
  const { data } = axios.get('/post/all');

  return data;
});

const initialState = {
  posts: [],
  status: 'loading',
};

const postSlice = createSlice({
  name: 'Post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPost.pending, (state, action) => {
      state.posts = [];
      state.status = 'loading';
    });
    builder.addCase(fetchAllPost.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.status = 'loaded';
    });
    builder.addCase(fetchAllPost.rejected, (state, action) => {
      state.posts = [];
      state.status = 'error';
    });
  },
});

// export const {} = postSlice.actions;
export default postSlice.reducer;
