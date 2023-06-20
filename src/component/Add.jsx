import React, { useState } from 'react';
import { TextField,Button, Typography, AppBar, Box, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';
import '../Profile.css';
import { DatePicker } from '@mui/lab';


  const Add = () => {
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const currencies = [
        {
          value: 'INR',
          label: 'Income',
        },
        {
          value: 'INR',
          label: 'Expense',
        },
      ];
      
    
  
    return (
      <div>

     {/* <Box sx={{ flexGrow: 2 }}>
            <AppBar position="static" style={{background:"lightblue"}}>
                <Toolbar>
                    <Typography variant="h3" component="div" textAlign={'left'} style={{fontFamily:'impact'}} sx={{ flexGrow: 1 }}>EXCOME</Typography>
                    <Button variant="contained"  color="secondary"><Link to = {'/Add'} style = {{textDecoration:"none",color:"white"}}>HOME</Link></Button>
                    <Button variant="contained" color="warning" ><Link to = {'/'} style = {{textDecoration:"none",color:"white"}}>LOGOUT</Link></Button>
                    
                </Toolbar>

            </AppBar>
      
        </Box> */
      }
        <Typography variant="h4" color={"white"} style={{fontFamily:'CONSTANTIA'}} >ADD<b></b></Typography>

        {/*  */}
        <Box className='box' sx={{
        width: 280,
        height: 450,
        paddingBottom: 0,
        paddingTop : 5,
        justifyContent : 'center', 
        background:'black',

        // '&:hover': {
          // backgroundColor: 'primary.main',

        // },
      }}>
        <TextField
          id="outlined-select-currency-native"
          select
          defaultValue="EUR"
          style={{color:'blue',background:'white',borderRadius:"15px",width:"170px"}}
          SelectProps={{
            native: true,
          }}
          
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <br></br>
        <br></br>
        <br></br>
       
        <TextField style={{color:'blue',background:'white',borderRadius:"15px",width:"170px"}}label="Note:" />
        <br></br>
        <br></br>
        <br></br>
        <TextField style={{color:'blue',background:'white',borderRadius:"15px",width:"170px"}}label="Amount:" />
        <br></br>
        <br></br>
        <br></br>
        {/* Submit button */}
        <TextField
            name="date"
            id="date"
            type="date"
            style={{color:'blue',background:'white',borderRadius:"15px"}}/>
        <br></br>
        <br></br>
        <br></br>5
        <Button variant="contained" color="success">UPDATE PROFILE</Button>
        {/* Button to calculate total */}
        </Box>
      </div>
    );
  };

  
  export default Add;