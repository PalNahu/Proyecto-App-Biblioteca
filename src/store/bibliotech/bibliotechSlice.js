
import { createSlice } from '@reduxjs/toolkit';

export const bibliotechSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: 'bibliotech',
  //declaracion del estado inicial de las variables
  initialState: {
    isSaving: false,
    isDeleting: false,
    reserves: [],
  },
  reducers: {
    startLoadingReserves: (state) => {
      state.isSaving = true;
    },
    endLoadingReserves: (state) => {
      state.isSaving = false;
    },
    startDeletingReserve: (state) => {
      state.isDeleting = true;
    },
    endDeletingReserve: (state) => {
      state.isDeleting = false;
    },
    setReserves: (state, action) => {
      state.reserves = action.payload.list;
    },
    deleteReserveById: (state, action) =>{
      state.reserves = state.reserves.filter(reserve => reserve.id !== action.payload);
    }
  }
});

export const { startLoadingReserves, endLoadingReserves, startDeletingReserve, endDeletingReserve, setReserves, deleteReserveById } = bibliotechSlice.actions;
