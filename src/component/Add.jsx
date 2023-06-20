import React, { useState } from 'react';
import { TextField, Button, Typography, AppBar, Box, Toolbar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css';
import axios from 'axios';

const Add = ({ userId }) => {
  const navigate = useNavigate();
  const [edata, setEdata] = useState({
    email:'',
    type:'',
    amount:'',
    date:'',
    note:''
  });
  const [transactionData, setTransactionData] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEdata({ ...edata, [name]: value });
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newTransaction = {
        email: userId,
        type: edata.type,
        amount: edata.amount,
        note: edata.note,
        date: edata.date,
      };
  
      try {
        const response = await axios.post(
          'http://localhost:9002/transactions',
          newTransaction
        );
  
        if (response.status === 200) {
          console.log('Transaction added successfully');
          const transaction = response.data;
          setTransactionData([...transactionData, transaction]);
        //   fetchIncomeAndExpenses(); // Call fetchIncomeAndExpenses after adding a new transaction
          alert('Transaction added successfully');
        } else {
          console.log('Failed to add transaction');
        }
      } catch (error) {
        console.error('Error:', error);
      }
  };

//     try {
//       const response = await fetch('http://localhost:9002/transactions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(edata),
//       });
//       if (response.ok) {
//         // Transaction saved successfully
//         console.log('Transaction saved successfully');
//         navigate('/user'); // Redirect to the home page or another route after successful save
//       } else {
//         // Handle the error case
//         console.error('Failed to save transaction');
//       }
//     } catch (error) {
//       console.error('Error occurred while saving transaction:', error);
//     }
//   };

  return (
    <div>
      <Typography variant="h4" color={'white'} style={{ fontFamily: 'CONSTANTIA' }}>
        ADD<b></b>
      </Typography>

      <Box
        className="box"
        sx={{
          width: 280,
          height: 450,
          paddingBottom: 0,
          paddingTop: 5,
          justifyContent: 'center',
          background: 'black',
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* <TextField
            // id="outlined-select-currency-native"
            // select
            // defaultValue="EUR"
            style={{ color: 'blue', background: 'white', borderRadius: '10px', width: '170px' }}
            value={edata.type}
            onChange={handleChange}
            // SelectProps={{
            //   native: true,
            // }}
          >
            {/* {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))} */}
          {/* </TextField> */}
          <TextField value={edata.type}
            onChange={handleChange} label="Note" variant="outlined" name="type" />
          <br />
          <br />
          <br />

          <TextField
            name="date"
            id="date"
            type="date"
            style={{ color: 'blue', background: 'white', borderRadius: '10px' }}
            value={edata.date}
            onChange={handleChange}
          />

          <br />
          <br />
          <br />

          <TextField value={edata.note}
            onChange={handleChange} label="Note" variant="outlined" name="note" />
          <br />
          <br />
          <br />
          <TextField value={edata.amount}
            onChange={handleChange} label="Amount" variant="outlined" name="amount"/>
          <br />
          <br />
          <br />
          {/* Submit button */}
          <Button type="submit" variant="contained" color="success">
            UPDATE FINANCES
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Add;