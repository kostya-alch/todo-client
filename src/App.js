import React from 'react';
import Layout from './components/Layout/Layout';
import AuthPage from './pages/Auth/AuthPage';

const App = () => {
   return (
      <>
         <Layout>
            <AuthPage />
         </Layout>
      </>
   );
};

export default App;
