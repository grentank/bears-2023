import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { UserFromBackend, UserType } from '../../../../types/user/userTypes';

// Define the initial state using that type
const initialState: UserType = {
  status: 'idle',
};

export const fetchUserFromSession = createAsyncThunk<UserFromBackend>(
  'user/fetchUserFromSession',
  () => axios<UserFromBackend>('/auth/check').then((res) => res.data),
);

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState as UserType,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => action.payload,
    logoutUser: (state) => ({ status: 'guest' }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserFromSession.pending, (state) => ({ status: 'fetching' }));
    builder.addCase(fetchUserFromSession.fulfilled, (state, action) => ({
      ...action.payload,
      status: 'logged',
    }));
    builder.addCase(fetchUserFromSession.rejected, (state) => ({ status: 'guest' }));
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
