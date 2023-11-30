import React, { useState } from 'react';
import '../../global.css';
import { SharedListCategories } from '../../../components/shared/list-categories/shared-list-categories';
import { SharedSearchBar } from '../../../components/shared/search-bar/shared-search-bar';
import { ListResultCard } from '../../../components/shared/list-result-card/list-result-card';
export const Search = () => {

  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChanges = ({books, isLoading}) => {
    setResults(books);
    setIsLoading(isLoading);
  }

  return (
    <>
      <div className='flex flex-col items-center lg:mb-16 sm:mb-8'>

        <SharedSearchBar
          variant='bordered'
          callbackWithValues={handleChanges}
        ></SharedSearchBar>

      </div>

      <div className="flex flex-row mt-4 justify-center">
        <div className='basis-4/4'>
          <ListResultCard
            isLoading={isLoading}
            list={results}
          ></ListResultCard>
        </div>
      </div>
    </>
  )
};
