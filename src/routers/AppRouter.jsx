import React from 'react'
import {
    Route,
    BrowserRouter as Router, Routes,
    
} from "react-router-dom";
import { Login } from '../pages/auth/login/login';
import { Register } from '../pages/auth/register/register';
import { Principal } from '../pages/core/principal/principal';
import { SharedNavbar } from '../components/shared/navbar/shared-navbar';


export const AppRouter = () => {
    return (
        <>
            <Router>
                <div>
                    <SharedNavbar></SharedNavbar>
                    <Routes>
                        <Route path="/" element={<Principal/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/register" element={<Register/>} />
                    </Routes>
                </div>
            </Router>

        </>
    )
}
