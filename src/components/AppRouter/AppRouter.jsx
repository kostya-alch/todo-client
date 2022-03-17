import React from 'react'
import Layout from '../Layout/Layout'
import { useRoutes } from '../../routes';
import { BrowserRouter } from 'react-router-dom';


const AppRouter = () => {
    const routes = useRoutes();
    return (
        <BrowserRouter>
            <Layout>
                {/* <Routes>
                    <Route path="/login" element={<AuthPage />}></Route>
                    <Route path="/registration" element={<RegistrationPage />}></Route>
                </Routes> */}
                {routes}
            </Layout>
        </BrowserRouter>
    )
}

export default AppRouter