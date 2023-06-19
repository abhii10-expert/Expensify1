import React, { useState } from 'react';
import { Button, TextField, FormControlLabel, Checkbox, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import '../sign.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    age: '',
    password: '',
    confirmPassword: '',
    termsChecked: false, // New state for terms checkbox
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can access the form data using the formData state
    // Perform validation, API calls, etc.
    console.log(formData);
  };

  const handleTermsClick = () => {
    // Open the terms and conditions pop-up window
    window.open('/terms.html', '_blank');
  };

  const togglePasswordVisibility = () => {
    setFormData((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  };


  return (
    <div className="signup-container">
      <h2 style={{color:"white"}}>SIGN UP</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
           <TextField
            label="Name"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
           <TextField
            label="Username"
            type="text"
            id="username"
            name="username"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
           <TextField
            label="Place"
            type="text"
            id="place"
            name="place"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          
          <TextField
          label="Age"
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
         
          <TextField
            label="Email ID"
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
         
         <TextField
           label="Education"
           type="text"
           id="email"
           name="email"
           value={formData.email}
           onChange={handleChange}
           required
         />
       </div>
        <div className="form-group">
        
          <TextField
            label="Phone No"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        
        <div className="form-group">
          <TextField className='pass'
            label="Password"
            type={formData.showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePasswordVisibility}
                    edge="inside"
                  >
                    {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="form-group">
          <TextField
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
<br></br><br></br>
<Button style={{color:"white"}} variant='contained'type="submit">Sign Up</Button>

        </div>
        </form>

        <form className="signup-form" onSubmit={handleSubmit}>
            {/* Terms and conditions checkbox */}
            <div className="form-group">
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.termsChecked}
                onChange={handleChange}
                name="termsChecked"
              />
            }
            label="I agree to the terms and conditions"
          />
          <Button
            variant="text"
            color="primary"
            onClick={handleTermsClick}
          >
            View Terms and Conditions
          </Button>
        </div>

        {/* Submit button */}
        <Button
          style={{ color: 'white' }}
          variant="contained"
          type="submit"
          disabled={!formData.termsChecked} // Disable the button if terms are not checked
        >
          Sign Up
        </Button>
        </form>
    
    
      
      </div>
  );
};

export default SignUp;
