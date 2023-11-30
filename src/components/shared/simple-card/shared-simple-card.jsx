import { Button, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react'
import React from 'react'
import './shared-simple-card.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearBookById } from '../../../store/book/bookSlice';

export const SharedSimpleCard = ({ id, title, authors, urlImage }) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = ($event) => {
    navigate('/book/'+id);
    dispatch(clearBookById());
  }

  return (
    <>
      <Card
        isFooterBlurred
        radius="lg"
        className="border-none dark:!bg-black/50"
      >
        <Image
          alt="Woman listing to music"
          className="object-cover"
          src={urlImage}
          width={140}
        />
        <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          {/* <p className="text-tiny text-white/80 font-bold dark:text-white">{title}</p> */}
          <Button onClick={() => handleClick()} className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
            Ver más
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}
