import React from 'react'
import Layout from '../Layout/Layout'
import { useRoutes } from '../../routes';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { useAuth } from '../../hooks/authHook';


const AppRouter = () => {
    const { login, logout, token, userId, isReady } = useAuth()
    const isLogin = !!token // с помощью falsy значения перевели флаг в boolean
    const routes = useRoutes(isLogin);
    return (
        <AuthContext.Provider value={{ login, logout, token, userId, isReady, isLogin }}>
            <BrowserRouter>
                <Layout>
                    {routes}
                </Layout>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default AppRouter