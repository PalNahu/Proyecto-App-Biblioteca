import { Card, CardHeader, Image } from '@nextui-org/react'
import React from 'react'
import './shared-image-alt-global.css';

export const SharedImageAltOut = ({ height, width, title, image = 'https://nextui.org/images/card-example-4.jpeg' }) => {
  return (
    <>
      <Card className={`col-span-12 sm:col-span-4 h-[${height}] w-[${width}]`}>
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={image}
        />
      </Card>
      <div className='share-title-image-alt-out mt-2'>
        {title}
      </div>
    </>
  )
}
