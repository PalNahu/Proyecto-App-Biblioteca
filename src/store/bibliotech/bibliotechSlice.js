
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
      state.reserves = action.payload.list;
    },
    endLoadingReserves: (state) => {
      state.isSaving = false;
    },
    deleteReserveById: (state, action) =>{
      state.reserves = state.reserves.filter(reserve => reserve.id !== action.payload);
    }
  }
});

export const { startLoadingReserves, setReserves, endLoadingReserves, deleteReserveById } = bibliotechSlice.actions;
