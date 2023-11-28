
import { Button, Input } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../../store/book/thunks';

export const SharedSearchBar = ({ variant = 'flat', callbackWithValues }) => {

  const { isLoading, books } = useSelector(state => state.books);
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');
  const searchContent = () => {

    dispatch(getBooks(searchValue));

  }

  useEffect(() => {
    if (callbackWithValues) {
      callbackWithValues({ isLoading, books });
    }

  }, [isLoading, books]);


  return (
    <>
      <div className="w-full flex flex-col gap-2 max-w-[240px]">
        <Input
          variant={variant}
          placeholder="Search"
          value={searchValue}
          onValueChange={setSearchValue}
          endContent={
            <Button isIconOnly onClick={searchContent} color="primary" >
                <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </Button> 
          }
        />
      </div>


    </>



  );
}


  // return (
  //   <>
  //     <Autocomplete
  //       label="Search book"
  //       className="w-96 "
  //       variant={variant}
  //     >
  //       {animals.map((animal) => (
  //         <AutocompleteItem key={animal.value} value={animal.value}>
  //           {animal.label}
  //         </AutocompleteItem>
  //       ))}
  //     </Autocomplete>
  //   </>
  // )