import React from 'react';
import './principal.css';
import '../global.css';
import { SharedNavbar } from '../../components/shared/navbar/shared-navbar';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { animals } from './data';
import { SharedListCategories } from '../../components/shared/list-categories/shared-list-categories';
import { SharedSectionCard } from '../../components/shared/section-card/shared-section-card';

export const Principal = () => {
    return (
        <>
            <div className="header-container">

                <SharedNavbar></SharedNavbar>

                <div className="header-background"></div>

                <div className="row container-titles">
                    <div className="col-md-7">
                        <h1 className='principal-title mb-1'>
                            read and add your insight
                        </h1>
                        <h3 className='principal-subtitle mb-4'>
                            find your favorite book and read it here for free
                        </h3>
                        <Autocomplete
                            label="Search book"
                            className="w-96 "
                        >
                            {animals.map((animal) => (
                                <AutocompleteItem key={animal.value} value={animal.value}>
                                    {animal.label}
                                </AutocompleteItem>
                            ))}
                        </Autocomplete>

                    </div>
                    <div className="col-md-5">

                    </div>
                </div>

            </div>

            <div className="row mt-4">
                <div className="col-md-3">
                    <SharedListCategories></SharedListCategories>
                </div>
                <div className='col-md'>
                    <SharedSectionCard></SharedSectionCard>
                    <SharedSectionCard></SharedSectionCard>
                    <SharedSectionCard></SharedSectionCard>
                </div>
            </div>

        </>
    )
}
