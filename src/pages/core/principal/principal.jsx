
import React from 'react';
import './principal.css';
import '../../global.css';
import { Button, Card, CardHeader, Image } from '@nextui-org/react';
import { useMediaQuery } from '@react-hook/media-query';

export const Principal = () => {

    const isMobile = useMediaQuery('(max-width: 768px)');


    return (
        <>
            <div className="header-container dark:bg-black/20 px-[2rem]" >

                <div className="flex flex-row">
                    <div className="flex flex-col justify-center xl:basis-7/12 lg:basis-9/12 md:basis-12/12">
                        <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold mb-1 dark:text-white'>
                            READ AND ADD YOUR INSIGHT
                        </h1>
                        <h3 className='text-2xl mb-4 dark:text-white'>
                            Find your favorite book and read it here for free
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

            <div className="flex flex-row flex-wrap justify-center gap-5 mt-20 mb-28 section2 dark:text-white" >
                <div className="basis-1/7 flex flex-col justify-between w-64 dark:text-white">
                    <div className='p-1'>
                        <div className='title-principal-content dark:text-white'>
                            Best Selling Plants
                        </div>
                        <div className='subtitle-principal-content dark:text-white'>
                            Easiest way to healthy life by buying your favorite plants
                        </div>
                    </div>
                    <Button
                        color="primary"
                        variant="ghost"
                        className='m-auto w-2/3'

                    >
                        Seguir buscando
                    </Button>

                </div>
                <div className="basis-2/7 dark:text-white">
                    <Card className="col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                            <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://nextui.org/images/card-example-4.jpeg"
                        />
                    </Card>
                </div>
                <div className="basis-2/7">
                    <Card className="col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                            <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://nextui.org/images/card-example-4.jpeg"
                        />
                    </Card>
                </div>
                <div className="basis-2/7">
                    <Card className="col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                            <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://nextui.org/images/card-example-4.jpeg"
                        />
                    </Card>
                </div>
            </div>

            <div className='flex flex-col item-center mt-32 mb-24 aboutus dark:text-white'>
                <div className='mb-8'>

                    <div className='title-principal-content dark:text-white'>
                        About us
                    </div>
                    <div className='subtitle-principal-content dark:text-white'>
                        Order now and appreciate the beauty of nature
                    </div>

                </div>

                <div className='flex flex-row flex-wrap gap-y-8 justify-center dark:text-white'>
                    <div className="basis-1/3 flex flex-col p-4 items-center text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                            <circle cx="48" cy="48" r="48" fill="#C1DCDC" />
                            <path d="M61.6009 51.0771H46.2604L46.7304 50.6252L50.7425 46.7676C52.363 47.5522 54.1485 47.9706 55.9627 47.9906C57.7888 47.9953 59.5808 47.5148 61.1409 46.6022C65.885 43.8407 68.4271 37.4485 67.9411 29.5024C67.9182 29.126 67.7524 28.7708 67.4751 28.5043C67.1979 28.2377 66.8285 28.0783 66.437 28.0563C58.1728 27.5909 51.5245 30.0332 48.6525 34.5946C46.7804 37.5658 46.7324 41.1542 48.4785 44.5945L45.6004 47.3618L43.1583 45.0137C44.3583 42.4657 44.2723 39.8215 42.8803 37.6138C40.7062 34.1543 35.7221 32.3101 29.5459 32.6581C29.1551 32.6805 28.7864 32.8399 28.5096 33.106C28.2328 33.3722 28.0671 33.7266 28.0438 34.1023C27.6798 40.0388 29.5999 44.8311 33.2 46.9233C34.4044 47.6304 35.7889 48.0032 37.2001 48.0002C38.4804 47.988 39.7432 47.7133 40.9042 47.1945L43.3363 49.5387L41.7362 51.0771H32.8C32.3756 51.0771 31.9686 51.2392 31.6686 51.5277C31.3685 51.8162 31.1999 52.2075 31.1999 52.6156C31.1999 53.0236 31.3685 53.4149 31.6686 53.7034C31.9686 53.9919 32.3756 54.154 32.8 54.154H34.718L37.3601 65.5904C37.515 66.2753 37.9098 66.8884 38.4784 67.327C39.0471 67.7656 39.7552 68.0032 40.4842 68H53.9186C54.6476 68.0032 55.3557 67.7656 55.9244 67.327C56.4931 66.8884 56.8879 66.2753 57.0427 65.5904L59.6848 54.154H61.6009C62.0252 54.154 62.4322 53.9919 62.7323 53.7034C63.0323 53.4149 63.2009 53.0236 63.2009 52.6156C63.2009 52.2075 63.0323 51.8162 62.7323 51.5277C62.4322 51.2392 62.0252 51.0771 61.6009 51.0771ZM51.4005 36.1889C53.4926 32.8697 58.4488 30.9966 64.801 31.0793C64.883 37.1965 62.9389 41.9599 59.4868 43.9638C57.1847 45.3099 54.4066 45.2214 51.6306 43.7368C50.0845 41.0773 50.0005 38.4023 51.4005 36.1889ZM40.0222 44.1753C38.1821 45.1234 36.3601 45.1676 34.856 44.2907C32.556 42.9503 31.2299 39.7907 31.1999 35.6927C35.4621 35.7216 38.7502 36.9965 40.1422 39.208C41.0542 40.6542 41.0002 42.4061 40.0222 44.1753ZM53.9186 64.9231H40.4842L38.0001 54.154H56.4007L53.9186 64.9231Z" fill="#1E1E1E" />
                        </svg>

                        <div className='title-principal-content dark:text-white'>
                            Large Assortment
                        </div>

                        <div className='subtitle-principal-content dark:text-white'>
                            we offer many different types of products with fewer variations in each category.
                        </div>
                    </div>
                    <div className="basis-1/3 flex flex-col p-4 items-center text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                            <circle cx="48" cy="48" r="48" fill="#C1DCDC" />
                            <path d="M61.6009 51.0771H46.2604L46.7304 50.6252L50.7425 46.7676C52.363 47.5522 54.1485 47.9706 55.9627 47.9906C57.7888 47.9953 59.5808 47.5148 61.1409 46.6022C65.885 43.8407 68.4271 37.4485 67.9411 29.5024C67.9182 29.126 67.7524 28.7708 67.4751 28.5043C67.1979 28.2377 66.8285 28.0783 66.437 28.0563C58.1728 27.5909 51.5245 30.0332 48.6525 34.5946C46.7804 37.5658 46.7324 41.1542 48.4785 44.5945L45.6004 47.3618L43.1583 45.0137C44.3583 42.4657 44.2723 39.8215 42.8803 37.6138C40.7062 34.1543 35.7221 32.3101 29.5459 32.6581C29.1551 32.6805 28.7864 32.8399 28.5096 33.106C28.2328 33.3722 28.0671 33.7266 28.0438 34.1023C27.6798 40.0388 29.5999 44.8311 33.2 46.9233C34.4044 47.6304 35.7889 48.0032 37.2001 48.0002C38.4804 47.988 39.7432 47.7133 40.9042 47.1945L43.3363 49.5387L41.7362 51.0771H32.8C32.3756 51.0771 31.9686 51.2392 31.6686 51.5277C31.3685 51.8162 31.1999 52.2075 31.1999 52.6156C31.1999 53.0236 31.3685 53.4149 31.6686 53.7034C31.9686 53.9919 32.3756 54.154 32.8 54.154H34.718L37.3601 65.5904C37.515 66.2753 37.9098 66.8884 38.4784 67.327C39.0471 67.7656 39.7552 68.0032 40.4842 68H53.9186C54.6476 68.0032 55.3557 67.7656 55.9244 67.327C56.4931 66.8884 56.8879 66.2753 57.0427 65.5904L59.6848 54.154H61.6009C62.0252 54.154 62.4322 53.9919 62.7323 53.7034C63.0323 53.4149 63.2009 53.0236 63.2009 52.6156C63.2009 52.2075 63.0323 51.8162 62.7323 51.5277C62.4322 51.2392 62.0252 51.0771 61.6009 51.0771ZM51.4005 36.1889C53.4926 32.8697 58.4488 30.9966 64.801 31.0793C64.883 37.1965 62.9389 41.9599 59.4868 43.9638C57.1847 45.3099 54.4066 45.2214 51.6306 43.7368C50.0845 41.0773 50.0005 38.4023 51.4005 36.1889ZM40.0222 44.1753C38.1821 45.1234 36.3601 45.1676 34.856 44.2907C32.556 42.9503 31.2299 39.7907 31.1999 35.6927C35.4621 35.7216 38.7502 36.9965 40.1422 39.208C41.0542 40.6542 41.0002 42.4061 40.0222 44.1753ZM53.9186 64.9231H40.4842L38.0001 54.154H56.4007L53.9186 64.9231Z" fill="#1E1E1E" />
                        </svg>

                        <div className='title-principal-content dark:text-white'>
                            Large Assortment
                        </div>

                        <div className='subtitle-principal-content dark:text-white'>
                            we offer many different types of products with fewer variations in each category.
                        </div>
                    </div>
                    <div className="basis-1/3 flex flex-col p-4 items-center text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                            <circle cx="48" cy="48" r="48" fill="#C1DCDC" />
                            <path d="M61.6009 51.0771H46.2604L46.7304 50.6252L50.7425 46.7676C52.363 47.5522 54.1485 47.9706 55.9627 47.9906C57.7888 47.9953 59.5808 47.5148 61.1409 46.6022C65.885 43.8407 68.4271 37.4485 67.9411 29.5024C67.9182 29.126 67.7524 28.7708 67.4751 28.5043C67.1979 28.2377 66.8285 28.0783 66.437 28.0563C58.1728 27.5909 51.5245 30.0332 48.6525 34.5946C46.7804 37.5658 46.7324 41.1542 48.4785 44.5945L45.6004 47.3618L43.1583 45.0137C44.3583 42.4657 44.2723 39.8215 42.8803 37.6138C40.7062 34.1543 35.7221 32.3101 29.5459 32.6581C29.1551 32.6805 28.7864 32.8399 28.5096 33.106C28.2328 33.3722 28.0671 33.7266 28.0438 34.1023C27.6798 40.0388 29.5999 44.8311 33.2 46.9233C34.4044 47.6304 35.7889 48.0032 37.2001 48.0002C38.4804 47.988 39.7432 47.7133 40.9042 47.1945L43.3363 49.5387L41.7362 51.0771H32.8C32.3756 51.0771 31.9686 51.2392 31.6686 51.5277C31.3685 51.8162 31.1999 52.2075 31.1999 52.6156C31.1999 53.0236 31.3685 53.4149 31.6686 53.7034C31.9686 53.9919 32.3756 54.154 32.8 54.154H34.718L37.3601 65.5904C37.515 66.2753 37.9098 66.8884 38.4784 67.327C39.0471 67.7656 39.7552 68.0032 40.4842 68H53.9186C54.6476 68.0032 55.3557 67.7656 55.9244 67.327C56.4931 66.8884 56.8879 66.2753 57.0427 65.5904L59.6848 54.154H61.6009C62.0252 54.154 62.4322 53.9919 62.7323 53.7034C63.0323 53.4149 63.2009 53.0236 63.2009 52.6156C63.2009 52.2075 63.0323 51.8162 62.7323 51.5277C62.4322 51.2392 62.0252 51.0771 61.6009 51.0771ZM51.4005 36.1889C53.4926 32.8697 58.4488 30.9966 64.801 31.0793C64.883 37.1965 62.9389 41.9599 59.4868 43.9638C57.1847 45.3099 54.4066 45.2214 51.6306 43.7368C50.0845 41.0773 50.0005 38.4023 51.4005 36.1889ZM40.0222 44.1753C38.1821 45.1234 36.3601 45.1676 34.856 44.2907C32.556 42.9503 31.2299 39.7907 31.1999 35.6927C35.4621 35.7216 38.7502 36.9965 40.1422 39.208C41.0542 40.6542 41.0002 42.4061 40.0222 44.1753ZM53.9186 64.9231H40.4842L38.0001 54.154H56.4007L53.9186 64.9231Z" fill="#1E1E1E" />
                        </svg>

                        <div className='title-principal-content dark:text-white'>
                            Large Assortment
                        </div>

                        <div className='subtitle-principal-content dark:text-white'>
                            we offer many different types of products with fewer variations in each category.
                        </div>
                    </div>
                </div>

            </div>
{/* 
            <div className='flex flex-col item-center mt-32 dark:text-white'>
                <div className='mb-12'>

                    <div className='title-principal-content dark:text-white'>
                        Categories
                    </div>
                    <div className='subtitle-principal-content dark:text-white'>
                        Find what you are looking for
                    </div>
                </div>

                <div className="flex flex-row gap-[6rem] dark:text-white">

                    <div className='basis-1/3 '>
                        <SharedImageAltOut
                            height={'32rem'}
                            width={'22rem'}
                            title={'Technology'}
                        ></SharedImageAltOut>
                    </div>
                    <div className='basis-1/3 pt-16'>
                        <SharedImageAltOut
                            height={'32rem'}
                            width={'22rem'}
                            title={'History'}
                        ></SharedImageAltOut>
                    </div>
                    <div className='basis-1/3'>
                        <SharedImageAltOut
                            height={'32rem'}
                            width={'22rem'}
                            title={'Finance'}
                        ></SharedImageAltOut>
                    </div>


                </div>


            </div> */}



        </>
    )
}