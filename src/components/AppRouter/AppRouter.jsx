import React from 'react'
import AuthPage from '../../pages/Auth/AuthPage'
import Layout from '../Layout/Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from '../../pages/Registration/RegistrationPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/login" element={<AuthPage />}></Route>
                    <Route path="/registration" element={<RegistrationPage />}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default AppRouter