import { createSlice } from '@reduxjs/toolkit';
import axios from '../../middleware/axios';

const initialState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
