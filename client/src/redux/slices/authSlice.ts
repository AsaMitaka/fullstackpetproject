import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../middleware/axios';

export const fetchLogin = createAsyncThunk('auth/fetchLogin', async (params) => {
  const { data } = await axios.post('/user/login', params);

  return data;
});

export const fetchSignup = createAsyncThunk('auth/fetchSignup', async (params) => {
  const { data } = await axios.post('/user/signup', params);

  return data;
});

export const fetchMe = createAsyncThunk('auth/fetchMe', async () => {
  const { data } = await axios.get('/user/me');

  return data;
});

const initialState = {
  user: null,
  status: 'loading',
};

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      state.status = 'rejected';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state, action) => {
      state.status = 'loading';
      state.user = null;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.user = action.payload;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.status = 'rejected';
      state.user = null;
    });
    builder.addCase(fetchSignup.pending, (state, action) => {
      state.status = 'loading';
      state.user = null;
    });
    builder.addCase(fetchSignup.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.user = action.payload;
    });
    builder.addCase(fetchSignup.rejected, (state, action) => {
      state.status = 'rejected';
      state.user = null;
    });
    builder.addCase(fetchMe.pending, (state, action) => {
      state.status = 'loading';
      state.user = null;
    });
    builder.addCase(fetchMe.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.user = action.payload;
    });
    builder.addCase(fetchMe.rejected, (state, action) => {
      state.status = 'rejected';
      state.user = null;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
