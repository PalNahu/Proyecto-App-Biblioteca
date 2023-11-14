
import React from 'react'
import { SharedSimpleCard } from '../simple-card/shared-simple-card'
import './shared-section-card.css'

export const SharedSectionCard = () => {
  return (
    <>  
    <h1 className='mb-2 text-left section-title'>
      Recommended
    </h1>
      <div className="section-container">
        <div className="row">
          <div className="col">
            <SharedSimpleCard></SharedSimpleCard>
          </div>
          <div className="col">
            <SharedSimpleCard></SharedSimpleCard>
          </div>
          <div className="col">
            <SharedSimpleCard></SharedSimpleCard>
          </div>
        </div>
      </div>
    </>
  )
}
