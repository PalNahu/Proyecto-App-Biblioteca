
import React from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Principal } from '../pages/core/principal/principal'
import { BookPage } from '../pages/core/bookPage/bookPage'
import { Search } from '../pages/core/search/search'
import { ReservePage } from '../pages/core/reservePage/reservePage'

export const AppBibliotecaRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/search" element={<Search/>}/>
        <Route path="/book/:id" element={<BookPage/>}/>
        <Route path="/*" element={<Navigate to="/" />} />
        <Route path="/reserves" element={<ReservePage/>} />
      </Routes>
    </>
  )
}
