import { Typography, Button } from '@mui/material'
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './Home.css'

const Home = () => {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const navigate = useNavigate();

  const changeToo = () => {
    navigate('/login');
  }

  const changeTu = () => {
    navigate('/adminl');
  }

  return (
    <div className='container'>
        <h2 style={{ fontSize: "80px", color: "gray" }}>EXPENSIFY</h2>
        <Typography className='typo' variant='h4' style={{ marginTop: "10px", fontWeight: "bold", fontFamily: "Arial, sans-serif" }}>
          All your Expense Problems Dealt in one Place!
        </Typography>
        <div className='but'>
        <Button variant='contained' style={{ color: "white", backgroundColor: "grey", marginTop: "10px", marginRight: "10px" }} onClick={changeToo}>
          LOGIN
        </Button>

        </div>
    </div>
  )
};

export default Home;
