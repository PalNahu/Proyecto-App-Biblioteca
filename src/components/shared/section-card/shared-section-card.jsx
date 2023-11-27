
import React from 'react'
import { SharedSimpleCard } from '../simple-card/shared-simple-card'
import './shared-section-card.css'

export const SharedSectionCard = ({direction = 'row'}) => {
	return (
		<>
			<h1 className={ direction == 'row' ? 'mb-2 section-title text-left' : ' mb-2 section-title text-center'}>
				Recommended
			</h1>
			<div className={'flex flex-' + direction + ' gap-4 '}>

				<div className="basis-1/3 m-auto">
					<SharedSimpleCard></SharedSimpleCard>
				</div>
				<div className="basis-1/3 m-auto">
					<SharedSimpleCard></SharedSimpleCard>
				</div>
				<div className="basis-1/3 m-auto">
					<SharedSimpleCard></SharedSimpleCard>
				</div>
			</div>


		</>
	)
}
