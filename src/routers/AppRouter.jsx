import React, { useEffect } from 'react'
import {
  Route,
  BrowserRouter as Router, Routes,

} from "react-router-dom";
import { SharedNavbar } from '../components/shared/navbar/shared-navbar';
import { CircularProgress } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth/authSlice';
import { AuthRoutes } from './AuthRoutes';
import { AppBibliotecaRoutes } from './AppBibliotecaRoutes';
import { Footer } from '../components/shared/footer/footer';

export const AppRouter = () => {

  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {

    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
    })
  }, [])


  if (status === 'checking') {
    return <>
      <div className="w-full h-screen  d-flex justify-center align-center">
        <CircularProgress size="md" aria-label="Loading..." />
      </div>
    </>
  }

  return (
    <>
      <Router>
        <SharedNavbar></SharedNavbar>

        <Routes>

          {
            (status === 'not-authenticated')
              ? <Route path="/auth/*" element={<AuthRoutes />} />
              : null
          }

          <Route path="/*" element={<AppBibliotecaRoutes />} />

        </Routes>

        <div className=''>
          <Footer ></Footer>
        </div>
      </Router>
    </>
  )
}

