import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { isAuth } from '../service/helpers';
import "./layout.scss";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }
  useEffect(() => {
    if (!isAuth()) {
      navigate('/login');
    }
  }, [navigate]);
  return (
    <div className='layout'>
      <div className='header'>
        <div className='logo'>
          LOGO
        </div>
        <div className="logout-button" onClick={logout}>
          logout
        </div>
      </div>
      {children}
    </div>
  )
}

export default Layout