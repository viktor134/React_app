import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import { isAuth } from './service/helpers';
import { privateRoutes, publicRoutes, } from './service/routes';


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if(!isAuth()) {
      navigate("/login");
    }
    if(location.pathname === "/") {
      if(isAuth()) {
        navigate("/posts");
      }
      else {
        navigate('/login');
      }
    }
  }, [location.pathname, navigate]);
  return (
    <div>
      <Routes>
        {isAuth() && privateRoutes.map(({ path, component }) => (<Route key={path} path={path} element={<Layout>{component}</Layout>} />))}
        {publicRoutes.map(({ path, component }) => (<Route key={path} path={path} element={component} />))}
      </Routes>
    </div>
  )
}

export default App;
