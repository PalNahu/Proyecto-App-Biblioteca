
import React from 'react';
import './principal.css';
import '../../global.css';
import { Button, Card, CardHeader, Image } from '@nextui-org/react';
import { useMediaQuery } from '@react-hook/media-query';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';

export const Principal = () => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery('(max-width: 768px)');
    const navigateSearch = () => {
        navigate('/search')
    }

    return (
        <>
            <div className="header-container dark:bg-black/20 px-[2rem] ">

                <div className="flex flex-row">
                    <div className="flex flex-col justify-center xl:basis-7/12 lg:basis-9/12 md:basis-12/12 ">
                        <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold mb-1 dark:text-white '>
                            BiblioTech
                        </h1>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 dark:text-white '>"Un lugar para reservar"</h2>
                        <h3 className='text-2xl mb-4 dark:text-white '>
                            ¡Encuentra los libros que estás buscando y reservalos!
                        </h3>
                    </div>

                    {
                        (!isMobile)
                            ? (
                                <div className='basis-3/12'>
                                    <div className="header-background lg:w-[24.5rem] lg:h-[24.5rem] md:w-[20rem] md:h-[20rem]"></div>

                                </div>

                            )
                            : null
                    }

                </div>
            </div>

            <div className="flex flex-row flex-wrap justify-center gap-5 mt-20 mb-28 section2 dark:text-white ">
                <div className="basis-1/7 flex flex-col justify-between w-64 dark:text-white ">
                    <div className='p-1'>
                        <div className='title-principal-content dark:text-white '>
                            Algunos ejemplos de nuestros géneros
                        </div>
                        <div className='subtitle-principal-content dark:text-white '>
                            ¡Estos son varios ejemplos pero hay libros de lo que busques!
                        </div>
                    </div>
                    <Button
                        color="primary"
                        variant="ghost"
                        className='m-auto w-2/3'
                        onClick={navigateSearch}
                    >
                        Empieza a reservar
                    </Button>

                </div>
                <div className="basis-2/7 dark:text-white">
                    <Card className="col-span-12 sm:col-span-4 h-[300px] m-2">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold dark:text-white">Tecnologia</p>
                            <h4 className="font-medium text-large p-0.5 px-2 bg-white/50 rounded dark:text-white dark:bg-black/50">Amplía tus conocimientos tecnológicos</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://img.freepik.com/foto-gratis/personas-generando-imagenes-usando-inteligencia-artificial-computadora-portatil_23-2150794313.jpg?size=626&ext=jpg"
                        />
                    </Card>
                </div>
                <div className="basis-2/7">
                    <Card className="col-span-12 sm:col-span-4 h-[300px] m-2">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-dark/60 uppercase font-bold dark:text-white">Historia</p>
                            <h4 className="font-medium text-large p-0.5 px-2 bg-white/50 rounded dark:text-white dark:bg-black/50">Un poco de historia.</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://media.istockphoto.com/id/1143734831/es/foto/fotograf%C3%ADas-y-documentos-de-historia-familiar-de-la-antigua-genealog%C3%ADa-1.jpg?s=612x612&w=0&k=20&c=S4I1VJIVTB2EXcDtUqlSZ8p0w19cKP9Q6-daW3ToiK4="
                        />
                    </Card>
                </div>
                <div className="basis-2/7">
                    <Card className="col-span-12 sm:col-span-4 h-[300px] m-2">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold  dark:text-white">Finanzas</p>
                            <h4 className="font-medium text-large p-0.5 px-2 bg-white/50 rounded dark:text-white dark:bg-black/50">Maneja tus finanzas</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://images.freejpg.com.ar/400/2606/words-money-background-message-letters-blocks-english-F100029338.jpg"
                        />
                    </Card>
                </div>
            </div>

            <div className='flex flex-col item-center mt-32 mb-24 aboutus dark:text-white'>
                <div className='mb-8'>

                    <div className='title-principal-content dark:text-white'>
                        Sobre nosotros
                    </div>
                    <div className='subtitle-principal-content dark:text-white'>
                        Una gran librería con más de 10.000 libros y una trayectoria de 10 días.
                    </div>

                </div>

                <div className='flex flex-row flex-wrap gap-y-8 justify-center dark:text-white'>         
                    <div className="basis-1/3 flex flex-col p-4 items-center text-center">
                        <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 8v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0Zm12 7h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 0 1 0 2Z" />
                        </svg>


                        <div className='title-principal-content dark:text-white'>
                            Reservas más duraderas.
                        </div>

                        <div className='subtitle-principal-content dark:text-white'>
                            Ofrecemos entre 4-5 meses de prestaciones de libro con posiblidad de ampliar el mismo hasta 5 veces.
                        </div>
                    </div>
                    <div className="basis-1/3 flex flex-col p-4 items-center text-center">
                        <svg class="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.546l3.2 3.659a1 1 0 0 0 1.506 0L13.454 14H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-8 10H5a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Zm5-4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2Z" />
                        </svg>

                        <div className='title-principal-content dark:text-white'>
                            Reserva automatizada.
                        </div>

                        <div className='subtitle-principal-content dark:text-white'>
                            Damos la posibilidad de reservar los libros con anticipación desde nuestra página web.
                        </div>
                    </div>
                    <div className="basis-1/3 flex flex-col p-4 items-center text-center">

                        <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">

                            <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
                        </svg>

                        <div className='title-principal-content dark:text-white'>
                            10 días de trayectoria
                        </div>

                        <div className='subtitle-principal-content dark:text-white'>
                            La biblioteca BiblioTech tiene más de 10 días prestando libros a la comunidad.
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}