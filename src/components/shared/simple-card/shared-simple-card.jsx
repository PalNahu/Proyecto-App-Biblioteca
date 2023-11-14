import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import React from 'react'
import './shared-simple-card.css'

export const SharedSimpleCard = () => {
  return (
    <>
      <Card className="py-3 w-60 simple-card-container">
        <div className='m-auto'>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Tentang kamu</p>
            <small className="text-default-500">tere liye</small>
            <small className="text-default-500">⭐⭐⭐⭐⭐</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://nextui.org/images/hero-card.jpeg"
              width={200}
            />
          </CardBody>

        </div>
      </Card>
    </>
  )
}
