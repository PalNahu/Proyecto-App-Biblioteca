import { setBookById, setBooks, startLoadingBooks } from "./bookSlice"


export const getBooks = (query, maxResults = 40) => {

    return async(dispatch, getState) => {

      if(query === '') return null;

      dispatch(startLoadingBooks());

      const resp = await fetch(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${query}&maxResults=${maxResults}`);
      const data = await resp.json();
      
      console.log(data.items);

      dispatch(setBooks({books: data.items}));
    }
}

export const getBookById = (id) => {

  return async(dispatch, getState) => {

    dispatch(startLoadingBooks());

    const resp = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${import.meta.env.VITE_REACT_APP_API_KEY}`);
    const data = await resp.json();
    
    console.log(data);

    dispatch(setBookById({book: data}));
  }
}