import { Button, TextField, FormControlLabel, Checkbox, IconButton, InputAdornment, Typography, AppBar, Box } from '@mui/material';
import React from 'react'
import './Uprofile.css'

const UProfile = () => {
  return(
    <div className='signup-container'>
  <Typography variant="h4" color={"white"} style={{fontFamily:'CONSTANTIA', paddingRight:"65px"}}  ><b>PROFILE</b></Typography>

  <Box className='box' sx={{
  width: 280,
  height: 650,
  paddingBottom: 0,
  paddingTop : 5,
  justifyContent : 'center', 
  background:'black',

  // '&:hover': {
    // backgroundColor: 'primary.main',

  // },
}}>
  <TextField className='gud'  style={{  color:'blue',background:'white',borderRadius:"15px"}} label="Name:"/>
  <br></br>
  <br></br>
  <br></br>
  <TextField style={{color:'blue',background:'white',borderRadius:"15px"}}label="Place:" />
  <br></br>
  <br></br>
  <br></br>
  <TextField style={{color:'blue',background:'white',borderRadius:"15px"}}label="Age:" />
  <br></br>
  <br></br>
  <br></br>
  <TextField style={{color:'blue',background:'white',borderRadius:"15px"}}label="Education:" />
  <br></br>
  <br></br>
  <br></br>
  <TextField style={{color:'blue',background:'white',borderRadius:"15px"}}label="Email-ID:" />
  <br></br>
  <br></br>
  <br></br>
  <TextField style={{color:'blue',background:'white',borderRadius:"15px"}}label="Phone-No:" />
  <br></br>
  <br></br>
  <br></br>
 
  {/* Submit button */}
  <Button variant="contained" color="success">UPDATE PROFILE</Button>
  {/* Button to calculate total */}
  </Box>
</div>
  )
}

export default UProfile;
