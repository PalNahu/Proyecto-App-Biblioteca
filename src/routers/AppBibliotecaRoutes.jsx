
import React from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Principal } from '../pages/core/principal/principal'

export const AppBibliotecaRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}
