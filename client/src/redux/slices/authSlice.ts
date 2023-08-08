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
  name: 'auth',
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      state.status = 'loading';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state, action) => {
      state.user = null;
      state.status = 'loading';
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = 'loaded';
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.user = null;
      state.status = 'rejected';
    });
    builder.addCase(fetchSignup.pending, (state, action) => {
      state.user = null;
      state.status = 'loading';
    });
    builder.addCase(fetchSignup.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = 'loaded';
    });
    builder.addCase(fetchSignup.rejected, (state, action) => {
      state.user = null;
      state.status = 'rejected';
    });
    builder.addCase(fetchMe.pending, (state, action) => {
      state.user = null;
      state.status = 'loading';
    });
    builder.addCase(fetchMe.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = 'loaded';
    });
    builder.addCase(fetchMe.rejected, (state, action) => {
      state.user = null;
      state.status = 'rejected';
    });
  },
});

export const isAuth = (state) => state.auth.user;

export const { logout } = authSlice.actions;
export default authSlice.reducer;
