import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { LoginForm, SignUpForm } from '../../../../types/user/formTypes';
import type { ThunkActionCreater } from '../../store';
import type { UserFromBackend } from '../../../../types/user/userTypes';
import { logoutUser, setUser } from './userSlice';

export const signUpThunk: ThunkActionCreater<SignUpForm> = (formData) => (dispatch) => {
  axios
    .post<UserFromBackend>('/auth/signup', {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      password: formData.password,
    })
    .then(({ data }) => dispatch(setUser({ ...data, status: 'logged' })))
    .catch(console.log);
};

export const loginUserThunk: ThunkActionCreater<LoginForm> = (formData) => (dispatch) => {
  axios
    .post<UserFromBackend>('/auth/login', formData)
    .then(({ data }) => dispatch(setUser({ ...data, status: 'logged' })))
    .catch(console.log);
};

export const checkUserThunk: ThunkActionCreater = () => (dispatch) => {
  axios
    .get<UserFromBackend>('/auth/check')
    .then(({ data }) => dispatch(setUser({ ...data, status: 'logged' })))
    .catch(() => dispatch(logoutUser()));
};

export const logoutThunk: ThunkActionCreater = () => (dispatch) => {
  axios
    .get('/auth/logout')
    .then(() => dispatch(logoutUser()))
    .catch(console.log);
};
