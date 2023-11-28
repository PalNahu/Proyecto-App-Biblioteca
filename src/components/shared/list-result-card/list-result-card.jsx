
import React, { useEffect } from 'react'
import { SharedSimpleCard } from '../simple-card/shared-simple-card'
import { CircularProgress } from '@nextui-org/react';

export const ListResultCard = ({ list, isLoading }) => {

  useEffect(() => {
    console.log({ list });
    console.log({ isLoading });
  }, [list, isLoading])


  return (
    <>

      {
        (!isLoading)
          ? (
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-4'>

              {
                list.map( ({id, volumeInfo}) => (
                  <SharedSimpleCard 
                    key={id}
                    title={volumeInfo.title}
                    authors={volumeInfo}
                    urlImage={(volumeInfo.imageLinks != undefined) ? volumeInfo.imageLinks.thumbnail: ''}
                  ></SharedSimpleCard>
                ))
              }
            </div>
          )
          : <CircularProgress className='mt-24' aria-label="Loading..." />
    }

    </>
  )
}
