import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLogin = createAsyncThunk('auth/fetchLogin', async (params) => {
  const { data } = await axios.post('http://localhost:3000/api/user/login', params);
  return data;
});

export const fetchSignup = createAsyncThunk('auth/fetchSignup', async (params) => {
  const { data } = await axios.post('http://localhost:3000/api/user/signup', params);
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
    logoutUser: (state, action) => {
      state.user = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state, action) => {
      state.user = null;
      state.status = 'loading';
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = 'active';
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
      state.status = 'active';
    });
    builder.addCase(fetchSignup.rejected, (state, action) => {
      state.user = null;
      state.status = 'rejected';
    });
  },
});

export const { logoutUser } = authSlice.actions;
export const selectIsAuth = (state) => Boolean(state.auth.user);
export default authSlice.reducer;
