
import { Select, SelectItem } from '@nextui-org/react'
import React from 'react'

export const SelectValues = ({ label, placeholder, values, functionOnChange = null, conditionToShow = true}) => {

  const handleChange = (selectedValue) => {
    if (functionOnChange != null) {
      functionOnChange(selectedValue);
    }
  }
  return (
    <>

      {
        (conditionToShow)
          ? (
            <Select
              items={values}
              label={label}
              placeholder={placeholder}
              variant='bordered'
              className="w-48"
              color="primary"
              onChange={handleChange}
            >
              {(element) => <SelectItem key={element.value}>{element.label}</SelectItem>}
            </Select>
          )
          : null
    }

    </>
  )
}
