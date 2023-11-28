import { setBooks, startLoadingBooks } from "./bookSlice"


export const getBooks = (query, maxResults = 10) => {

    return async(dispatch, getState) => {

      if(query === '') return null;

      dispatch(startLoadingBooks());

      const resp = await fetch(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${query}&maxResults=${maxResults}`);
      const data = await resp.json();

      console.log(data);
      
      dispatch(setBooks({books: data.items}));
    }
  }