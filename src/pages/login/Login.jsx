import React, { useState } from 'react';
import { Button, Input } from 'antd';
import "./login.scss";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState("");
  const onEmailChange = ({ target: { value } }) => {
    setData((prev) => ({ ...prev, email: value }))
  }
  const onPasswordChange = ({ target: { value } }) => {
    setData((prev) => ({ ...prev, password: value }))
  }
  const onSubmit = () => {
    if (data.email === "admin" && data.password === "admin") {
      setErrorMessage('');
      localStorage.setItem("token", "value");
      navigate("/posts");
    }
    else {
      setErrorMessage("NO, GOD PLEASE NO, your email or password is not trust")
    }
  }
  return (
    <div className='login-page'>
      <div className='login-form'>
        <div className='login-header'>Login</div>
        <Input placeholder='Email' onChange={onEmailChange} value={data.email} />
        <Input type="password" onChange={onPasswordChange} value={data.password} placeholder='Password' />
        {errorMessage && (
          <div className='error'>
            {errorMessage}
          </div>
        )}
        <Button type="primary" onClick={onSubmit}>Login</Button>
      </div>
    </div>
  )
}

export default Login