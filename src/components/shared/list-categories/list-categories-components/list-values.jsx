
import { Button } from '@nextui-org/react'
import React from 'react'

export const ListValues = ({conditionToShow, list}) => {
  return (
    <>
      <div className='grid lg:grid-cols-6 gap-3'>
        {
          (conditionToShow) ? (
            list.map((element) => (
              <Button key={element.id} radius="lg" color="primary" variant="bordered">
                {element.value}
              </Button>
            )))
            : null
        }
      </div>
    </>
  )
}
