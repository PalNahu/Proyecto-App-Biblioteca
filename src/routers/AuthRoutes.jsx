
import React from 'react'
import { Login } from '../pages/auth/login/login'
import { Register } from '../pages/auth/register/register'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

export const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  )
}
