import React from 'react';
import '../global.css';
import { Card, Button } from "@nextui-org/react";
import { SharedSimpleCard } from '../../components/shared/simple-card/shared-simple-card';
import './bookPage.css';

export const BookPage = () => {
    return (
        <div className='containerBook'>
            <div className="bg-transparent rounded-xl flex-container">
                <div className='bookInfo'>
                    <Card
                        shadow
                        className="bg-white m-auto p-5 text-center w-96"
                    >
                        <div className='simpleCardBook'>
                            <SharedSimpleCard />
                        </div>
                        <h3>Crazy Rich Asians</h3>
                        <span className="block mt-2">By Kevin Kwan</span>
                        <span className="block mt-2">1,988,288 votes</span>
                        <Button className="mt-5" color="primary">Reservar libro</Button>
                        
                    </Card>
                </div>
            </div>
        </div>
    );
};
