
import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: 'name',
  //declaracion del estado inicial de las variables
  initialState: {
    books: [],
    isLoading: false,
  },
  reducers: {
    startLoadingBooks: (state) => {
      state.isLoading = true;
    },
    setBooks: (state, action) => {
      state.isLoading = false;
      state.books = action.payload.books;
    }
  },
});

export const { startLoadingBooks, setBooks } = bookSlice.actions;
