import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import './Login.css';

const Login = ({ setLoginUser }) => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9002/Login', user);
      const { message, user } = response.data;
      console.log(message);
      console.log(user);

      // Redirect to another page or perform additional actions upon successful login
      if (user.isAdmin) {
        // User is an admin
        navigate('/admin')
      } else {
        setLoginUser(user);
        // User is not an admin
        navigate('/user')
      }
    } catch (error) {
      const { message } = error.response.data;
      setErrorMessage(message);
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <Link href="/" className="back-button">
          <ArrowBackIcon />
        </Link>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email ID"
            variant="outlined"
            fullWidth
            required
            value={user.email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={user.password}
            onChange={handleChange}
          />
          <Button variant="contained" fullWidth type="submit">
            Login
          </Button>
        </form>
        {errorMessage && (
          <div className="error-message">
            {errorMessage}
          </div>
        )}
        <div className="signup-link">
          Don't have an account?{' '}
          <Link href="/signup" underline="always">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;