import React from 'react'
import './shared-list-categories.css'
import { Button } from '@nextui-org/react'

export const SharedListCategories = () => {

    return (
        <>
            <div className='list-container'>

                <ul className='w-60 centered-list'>
                    <li className='list-section'>
                        Book by gnere
                    </li>
                    <li>
                        <Button radius="lg" color="default" variant="bordered">
                            All Genres
                        </Button>
                    </li>
                    <li>
                        <Button radius="lg" color="default" variant="bordered">
                            Business
                        </Button>
                    </li>
                    <li>
                        <Button radius="lg" color="default" variant="bordered">
                            Fiction
                        </Button>
                    </li>
                    <li>
                        <Button radius="lg" color="default" variant="bordered">
                            Philosophy
                        </Button>
                    </li>
                    <li>
                        <Button radius="lg" color="default" variant="bordered">
                            Biography
                        </Button>
                    </li>
                </ul>
                <br></br>
                <ul className='w-60 centered-list'>
                    <li className='list-section'>
                        Recomendations
                    </li>
                    <li>
                        <Button radius="lg" color="default" variant="bordered">
                            Artist of the Month
                        </Button>
                    </li>
                    <li>
                        <Button radius="lg" color="default" variant="bordered">
                            Book of the Year
                        </Button>
                    </li>
                    <li>
                        <Button radius="lg" color="default" variant="bordered">
                            Top Genre
                        </Button>
                    </li>
                    <li>
                        <Button radius="lg" color="default" variant="bordered">
                            Trending
                        </Button>
                    </li>
                    <li>
                        <Button radius="lg" color="default" variant="bordered">
                            Biography
                        </Button>
                    </li>
                </ul>
            </div>
        </>
    )
}
