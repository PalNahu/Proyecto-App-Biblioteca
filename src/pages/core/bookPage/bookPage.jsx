import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getBookById } from '../../../store/book/thunks';
import { Button, Image, Chip, CircularProgress } from "@nextui-org/react";
import { SharedSectionCard } from '../../../components/shared/section-card/shared-section-card';
import './bookPage.css';
import '../../global.css';
import { toast } from 'react-toastify';
import { createReserve } from '../../../store/bibliotech/thunks';



export const BookPage = () => {

	const { id } = useParams();
	const { status } = useSelector(state => state.auth);
	const { bookById } = useSelector(state => state.books);
	const dispatch = useDispatch();
	const navigate = useNavigate();



	useEffect(() => {
		dispatch(getBookById(id));
	}, [])

	//Codigo que se va a ejecutar en cuanto se pinte el componente
	if (!bookById) {
		return <CircularProgress className='m-auto lg:h-[70vh] sm:h-[50vh]' aria-label="Loading..." />;
	}

	let newAverageRating = undefined;

	for (let i = 0; i < bookById.volumeInfo.ratingsCount; i++) {
		if (newAverageRating === undefined) {
			newAverageRating = []
		}
		newAverageRating.push(
			<svg key={i} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
				<path className='dark:fill-white' d="M7.29561 1.19067L9.13519 4.91746L13.2489 5.51874L10.2723 8.41801L10.9748 12.5139L7.29561 10.5791L3.61646 12.5139L4.31895 8.41801L1.34229 5.51874L5.45603 4.91746L7.29561 1.19067Z" fill="black" />
			</svg>
		);
	}

	//Metodos
	const handleIfLogged = async () => {

		if (status === 'not-authenticated' || !status) {
			toast.error("Necesitas estar logueado para reservar el libro", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			});
			navigate('/auth/login');
		}
		else {
			dispatch(createReserve());
			navigate('/reserves');
		}
	}

		const backToSearchPage = () => {
			navigate('/search');
		}




		return (
			<>
				<div className="flex flex-row flex-wrap justify-center">
					<div className='basis-4/6 flex flex-col flex-wrap gap-3'>
						<div className="book-container dark:bg-black/20">


							<div className="flex flex-row justify-center p-1">

								<div className="basis-1/2 flex justify-center items-center">
									<Image
										className='shadow-lg mt-12 rounded-md'
										src={(bookById.volumeInfo.imageLinks) ? bookById.volumeInfo.imageLinks.thumbnail : ''}
									/>
									{
										(!bookById.volumeInfo.imageLinks)
											? (
												<div className='flex flex-row justify-center items-center rounded font-semibold bg-white/70 w-[10rem] h-[14rem] dark:bg-white/10 dark:text-white'>
													No existe imagen
												</div>
											)
											: ''}
								</div>
								<div className="basis-1/2 flex flex-col justify-end mb-2 p-2 mt-12">
									<div className='title-book-header text-left dark:text-white'>
										{bookById.volumeInfo.title}
									</div>
									<div className='flex flex-row gap-3 details-book-header'>
										<div className="dark:text-white">
											Autores:
										</div>
										<div className="basis-1/3 dark:text-white">{bookById.volumeInfo.authors && Array.isArray(bookById.volumeInfo.authors) ? (
											`${bookById.volumeInfo.authors.join(', ')}`
										) : (
											'No hay información de autor disponible'
										)}</div>
										<div className="dark:text-white">{`Fecha:`}</div>
										<div className="dark:text-white">{`${bookById.volumeInfo.publishedDate}`}</div>
									</div>

									<div className='flex flex-row details-book-header'>
										<div className="dark:text-white">
											{`Valoración: ${(newAverageRating === undefined) ? 'No existe valoración para este libro' : ''}`}
										</div>
										<div className="flex flex-row dark:text-white gap-1 items-center average-rating-container">
											{newAverageRating}
										</div>
									</div>

									<Button
										color="primary"
										variant="ghost"
										className='mt-3 w-80'
										onClick={handleIfLogged}
									>
										Reservalo ahora
									</Button>

								</div>

							</div>

							<div className="central-book-container">
								<div className="flex flex-col text-left mb-3">
									<div className="title-book-description dark:text-white">
										Sinopsis
									</div>
									<div className="content-book-description normal-case mt-4 dark:text-white">
										{bookById.volumeInfo.description || 'No existe sinopsis para este libro'}
									</div>
								</div>

								<div className='categories-book-container'>
									<div className='flex flex-row items-center gap-4'>
										<div className="text-xl title-book-description dark:text-white">
											Categorias:
										</div>
										{
											(bookById.volumeInfo.categories)
												? bookById.volumeInfo.categories.map((element, index) => (
													<Chip key={index} size="lg" radius="sm" variant='bordered' color='primary'>{element}</Chip>
												))
												: <div className='font-semibold dark:text-white'>Este libro no tiene categorias</div>
										}

									</div>
								</div>

								<div className='flex flex-col gap-4 aditional-information-container text-left'>

									<div className='title-book-description dark:text-white' >
										Information Additional
									</div>
									<div className='flex flex-row gap-4'>
										<div className='basis-2/6'>
											<div className='book-title-item dark:text-white'>
												Editor/a
											</div>
											<div className='book-subtitle-item dark:text-white'>
												{bookById.volumeInfo.publisher}
											</div>
										</div>
										<div className='basis-2/6'>
											<div className='book-title-item dark:text-white'>
												Cantidad de paginas
											</div>
											<div className='book-subtitle-item dark:text-white'>
												{bookById.volumeInfo.pageCount}
											</div>
										</div>
										<div className='basis-2/6'>
											<div className='book-title-item dark:text-white'>
												Version del contenido
											</div>
											<div className='book-subtitle-item dark:text-white'>
												{bookById.volumeInfo.contentVersion}
											</div>
										</div>
									</div>

								</div>

								<div className='mt-1 p2'>
									<Button
										color="primary"
										variant="ghost"
										className='m-auto w-2/3'
										onClick={backToSearchPage}
										startContent={
											<svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
												<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
											</svg>
										}
									>
										Seguir explorando
									</Button>
								</div>
							</div>

						</div>
					</div>


					<div className='basis-2/6'>
						<SharedSectionCard direction='col'></SharedSectionCard>
					</div>
				</div >

			</>
		);
	};
