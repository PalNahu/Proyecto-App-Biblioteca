import React from 'react';
import '../../global.css';
import { Card, Button, Image, Chip } from "@nextui-org/react";
import { SharedSimpleCard } from '../../../components/shared/simple-card/shared-simple-card';
import './bookPage.css';
import { SharedSectionCard } from '../../../components/shared/section-card/shared-section-card';

export const BookPage = () => {
	return (
		<>

			<div className="flex flex-row justify-center">
				<div className='basis-4/6 flex flex-col gap-3'>
					<div className="book-container">

						<div className="flex flex-row flex-wrap justify-center p-1">

							<div className="basis-1/2 flex justify-center">
								<Image
									className='shadow-lg mt-2 rounded-md'
									src='https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api'
								/>
							</div>
							<div className="basis-1/2 flex flex-col justify-end mb-5 p-2">
								<div className='title-book-header text-left'>
									Titulo hola
								</div>
								<div className='flex flex-row gap-2 details-book-header'>
									<div className="basis-1/3">by Fiersa besari</div>
									<div className="basis-1/3">1 juli 2016</div>
								</div>

								<div className="flex flex-row gap-1 average-rating-container">
									<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
										<path d="M7.29561 1.19067L9.13519 4.91746L13.2489 5.51874L10.2723 8.41801L10.9748 12.5139L7.29561 10.5791L3.61646 12.5139L4.31895 8.41801L1.34229 5.51874L5.45603 4.91746L7.29561 1.19067Z" fill="black" />
									</svg>

									<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
										<path d="M7.29561 1.19067L9.13519 4.91746L13.2489 5.51874L10.2723 8.41801L10.9748 12.5139L7.29561 10.5791L3.61646 12.5139L4.31895 8.41801L1.34229 5.51874L5.45603 4.91746L7.29561 1.19067Z" fill="black" />
									</svg>

									<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
										<path d="M7.29561 1.19067L9.13519 4.91746L13.2489 5.51874L10.2723 8.41801L10.9748 12.5139L7.29561 10.5791L3.61646 12.5139L4.31895 8.41801L1.34229 5.51874L5.45603 4.91746L7.29561 1.19067Z" fill="black" />
									</svg>

									<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
										<path d="M7.29561 1.19067L9.13519 4.91746L13.2489 5.51874L10.2723 8.41801L10.9748 12.5139L7.29561 10.5791L3.61646 12.5139L4.31895 8.41801L1.34229 5.51874L5.45603 4.91746L7.29561 1.19067Z" fill="black" />
									</svg>

									<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
										<path d="M7.29561 1.19067L9.13519 4.91746L13.2489 5.51874L10.2723 8.41801L10.9748 12.5139L7.29561 10.5791L3.61646 12.5139L4.31895 8.41801L1.34229 5.51874L5.45603 4.91746L7.29561 1.19067Z" fill="black" />
									</svg>
								</div>

								<div className='flex flex-row details-book-header'>
									<div className="basis-1/4">3.7M read</div>
									<div className="basis-1/4">9.8K Votes</div>
								</div>

								<Button
									color="primary"
									variant="ghost"
									className='mt-3 w-80'
								>
									Reservalo ahora
								</Button>

							</div>

						</div>

						<div className="central-book-container">
							<div className="flex flex-col text-left mb-3">
								<div className="title-book-description">
									Sinopsis
								</div>
								<div className="content-book-description">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius nisl sed sit aliquet nullam pretium. Velit vel aliquam amet augue. Risus id purus dolor dolor. Sagittis at vulputate rhoncus pharetra purus vitae, ac. Sit nam eleifend mauris, duis mattis leo, ut. Viverra accumsan elementum vehicula orci magna. Elementum, euismod ut sed at ut non. Eget commodo mi scelerisque erat. Mus adipiscing et mattis vitae sapien turpis. Eu, sit urna, convallis in commodo, sed condimentum dictumst vitae. Ultricies aenean a non tincidunt tortor ut pulvinar. Vulputate viverra tempor sed turpis at blandit malesuada at quam. Enim cursus vitae turpis lectus egestas nunc risus.
								</div>
							</div>

							<div className='categories-book-container'>
								<div className='flex flex-row gap-4'>
									<Chip size="lg" radius="sm" variant='bordered' color='primary'>Fiction</Chip>
									<Chip size="lg" radius="sm" variant='bordered' color='primary'>Horror</Chip>
									<Chip size="lg" radius="sm" variant='bordered' color='primary'>Computer Science</Chip>
									<Chip size="lg" radius="sm" variant='bordered' color='primary'>Drama</Chip>
								</div>
							</div>

							<div className='flex flex-col gap-4 aditional-information-container text-left'>

								<div className='title-book-description' >
									Information Additional
								</div>
								<div className='flex flex-row gap-4'>
									<div className='basis-1/6'>
										<div className='book-title-item'>
											Penerbit
										</div>
										<div className='book-subtitle-item'>
											mediakita
										</div>
									</div>
									<div className='basis-1/6'>
										<div className='book-title-item'>
											Penerbit
										</div>
										<div className='book-subtitle-item'>
											mediakita
										</div>
									</div>
									<div className='basis-1/6'>
										<div className='book-title-item'>
											Penerbit
										</div>
										<div className='book-subtitle-item'>
											mediakita
										</div>
									</div>
								</div>

								<div className='flex flex-row gap-4'>
									<div className='basis-1/6'>
										<div className='book-title-item'>
											Penerbit
										</div>
										<div className='book-subtitle-item'>
											mediakita
										</div>
									</div>
									<div className='basis-1/6'>
										<div className='book-title-item'>
											Penerbit
										</div>
										<div className='book-subtitle-item'>
											mediakita
										</div>
									</div>
									<div className='basis-1/6'>
										<div className='book-title-item'>
											Penerbit
										</div>
										<div className='book-subtitle-item'>
											mediakita
										</div>
									</div>
								</div>

							</div>

							<div className='mt-1 p2'>
								<Button
									color="primary"
									variant="ghost"
									className='m-auto w-2/3'
								>
									Seguir buscando
								</Button>
							</div>
						</div>
					</div>


				</div>
				<div className='basis-2/6'>
					<SharedSectionCard direction='col'></SharedSectionCard>
				</div>
			</div>

		</>
	);
};
