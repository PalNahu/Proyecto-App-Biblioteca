
import { createSlice } from '@reduxjs/toolkit';

export const bibliotechSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: 'bibliotech',
  //declaracion del estado inicial de las variables
  initialState: {
    isSaving: false,
    reserves: [],
  },
  reducers: {
    startLoadingReserves: (state) => {
      state.isSaving = true;
    },
    setReserves: (state, action) => {
      state.isSaving = false;
      state.reserves = action.payload.reserves;
    },
  }
});

export const { startLoadingReserves, setReserves } = bibliotechSlice.actions;
