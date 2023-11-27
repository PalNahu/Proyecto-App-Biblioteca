import React, { useState } from 'react';
import '../../global.css';
import { SharedListCategories } from '../../../components/shared/list-categories/shared-list-categories';
import { SharedSectionCard } from '../../../components/shared/section-card/shared-section-card';
export const Search = () => {
  return(
    <>
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
};
