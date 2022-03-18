import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import AuthPage from './pages/Auth/AuthPage';
import RegistrationPage from './pages/Registration/RegistrationPage';
import NotFound from './components/NotFound/NotFound';

export const useRoutes = (isLogin) => {
   if (isLogin)
      return (
         <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      );

   return (
      <Routes>
         <Route path="/login" element={<AuthPage />} />
         <Route path="/" element={<AuthPage />} />
         <Route path="/registration" element={<RegistrationPage />}></Route>
         <Route path="*" element={<NotFound />} />
      </Routes>
   );
};
