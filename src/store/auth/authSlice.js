
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: 'auth',
  //declaracion del estado inicial de las variables
  initialState: {
    status: 'not-authenticated', // 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, {payload}) => {
      state.status = 'authenticated'; // 'authenticated'
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoUrl = payload.photoURL;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.status = 'not-authenticated'; // 'authenticated'
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoUrl = null;
      state.errorMessage = payload?.errorMessage;
    },
    checkingCredencials: (state) => {
      state.status = 'checking';
    }
  },
});

export const { login, logout, checkingCredencials } = authSlice.actions;
