
import React, { useEffect } from 'react'
import { SharedSimpleCard } from '../simple-card/shared-simple-card'
import { CircularProgress } from '@nextui-org/react';

export const ListResultCard = ({ list, isLoading }) => {



  return (
    <>
      {
        (!isLoading)
          ? (
            <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-x-10 gap-y-10'>

              {
                list.map(({ id, volumeInfo }) => (
                  <SharedSimpleCard
                    key={id}
                    id={id}
                    title={volumeInfo.title}
                    authors={volumeInfo}
                    urlImage={(volumeInfo.imageLinks != undefined) ? volumeInfo.imageLinks.thumbnail : ''}
                  ></SharedSimpleCard>
                ))
              }
            </div>
          )
          : <CircularProgress className='mt-24 mb-24' aria-label="Loading..." />
      }
    </>
  )
}
