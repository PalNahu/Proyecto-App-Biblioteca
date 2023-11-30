
import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: 'name',
  //declaracion del estado inicial de las variables
  initialState: {
    books: [],
    isLoading: false,
    bookById: undefined,
  },
  reducers: {
    startLoadingBooks: (state) => {
      state.isLoading = true;
    },
    setBooks: (state, action) => {
      state.isLoading = false;
      state.books = action.payload.books;
    },
    clearBooks: (state) => {
      state.isLoading = false;
      state.books = [];
    },
    setBookById: (state, action) => {
      state.isLoading = false;
      state.bookById = action.payload.book;
    },
    clearBookById: (state, action) => {
      state.bookById = undefined;
    },

  },
});

export const { startLoadingBooks, setBooks, clearBooks, setBookById, clearBookById } = bookSlice.actions;
