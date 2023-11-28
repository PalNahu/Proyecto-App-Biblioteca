import React, { useState } from 'react'
import './shared-list-categories.css'
import { Button, Select, SelectItem } from '@nextui-org/react'
import { TypesOfSelectCategory } from './enums/types-of-select-category'
import { useMediaQuery } from '@react-hook/media-query'
import { ListValues } from './list-categories-components/list-values'
import { SelectValues } from './list-categories-components/select-values'

export const SharedListCategories = () => {

  const isMediumOrSmallScreen = useMediaQuery('(max-width: 1024px)');

  const typesOfSelectCategory = [
    {
      value: TypesOfSelectCategory.GENDER,
      label: TypesOfSelectCategory.GENDER,
    },
    {
      value: TypesOfSelectCategory.RECOMMENDATION,
      label: TypesOfSelectCategory.RECOMMENDATION,
    }
  ];

  const gendersValues = [
    {
      label: 'Business',
      value: 'Business',
    },
    {
      label: 'Fiction',
      value: 'Fiction',
    },
    {
      label: 'Philosophy',
      value: 'Philosophy',
    },
    {
      label: 'Biography',
      value: 'Biography',
    },
  ];

  const recommensationsValues = [
    {
      label: 'Artist of the Month',
      value: 'Artist of the Month',
    },
    {
      label: 'Book of the Year',
      value: 'Book of the Year',
    },
    {
      label: 'Trending',
      value: 'Trending',
    },
    {
      label: 'Biography',
      value: 'Biography',
    },
  ];

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div className='flex flex-row items-center gap-1'>
        <div className='basis-1/4'>

          <SelectValues
            label="Type of category"
            placeholder="Select"
            values={typesOfSelectCategory}
            functionOnChange={handleChange}
          >
          </SelectValues>
        </div>
        {
          (selectedValue != '')
            ? (
              <div className='basis-3/4'>

                {
                  (!isMediumOrSmallScreen)
                    ? (
                      <>
                        <ListValues
                          conditionToShow={selectedValue === TypesOfSelectCategory.GENDER}
                          list={gendersValues}
                        >
                        </ListValues>

                        <ListValues
                          conditionToShow={selectedValue === TypesOfSelectCategory.RECOMMENDATION}
                          list={recommensationsValues}
                        >
                        </ListValues>

                      </>

                    )
                    :
                    (
                      <>
                        <SelectValues
                          label="Type of recommendations"
                          placeholder="Select"
                          values={recommensationsValues}
                          conditionToShow={selectedValue === TypesOfSelectCategory.RECOMMENDATION}
                        >
                        </SelectValues>
                        <SelectValues
                          label="Type of genders"
                          placeholder="Select"
                          values={gendersValues}
                          conditionToShow={selectedValue === TypesOfSelectCategory.GENDER}
                        >
                        </SelectValues>

                      </>
                    )


                }


              </div>
            )
            : null
        }


      </div>

    </>
  )
}
