import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, TextField, FormControlLabel, Checkbox, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    age: '',
    phoneNumber: '',
    email: '',
    place: '',
    education: '',
    password: '',
    confirmPassword: '',
    termsChecked: false,
    showPassword: false,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
   // Perform form validation
   if (formData.password !== formData.confirmPassword) {
    console.error('Passwords do not match');
    return;
  }

  // Create a payload object with the form data to send to the server
  const payload = {
    name: formData.name,
    username: formData.username,
    email: formData.email,
    phoneNumber: formData.phoneNumber,
    age: formData.age,
    place: formData.place,
    education: formData.education,
    password: formData.password,
    confirmPassword: formData.confirmPassword,
  };

  try {
    // Make an API call to the server to register the user
    const response = await fetch('http://localhost:9002/SignUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      // Registration successful, display a success message or redirect to another page
      console.log('User registered successfully');
      navigate('/login');
    } else {
      // Registration failed, display an error message or handle the error
      console.error('Error occurred while registering user');
    }
  } catch (error) {
    // Handle any network or server errors
    console.error('Error occurred while making the API call', error);
  }

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
      <h2 style={{ color: 'white' }}>SIGN UP</h2>
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
            value={formData.username}
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
            value={formData.place}
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
            id="education"
            name="education"
            value={formData.education}
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
          <TextField
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
          <br />
          <br />
          <Button style={{ color: 'white' }} variant="contained" type="submit" >
            Sign Up
          </Button>
        </div>
      </form>

      <form className="signup-form" onSubmit={handleSubmit}>
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
          <Button variant="text" color="primary" onClick={handleTermsClick}>
            View Terms and Conditions
          </Button>
        </div>

        {/* <Button
          style={{ color: 'white' }}
          variant="contained"
          type="submit"
          disabled={!formData.termsChecked}
        >
          Sign Up
        </Button> */}
      </form>
    </div>
  );
};

export default SignUp;