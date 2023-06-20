import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Profile.css'; // Import the CSS file

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch(`/collectById/${id}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Link to="/user" className="back-button">
        <ArrowBackIcon fontSize="large" />
      </Link>
      <Box className="profile-box">
        <Typography variant="h5" gutterBottom>
          Name: {user.name}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Username: {user.username}
        </Typography>
        <Typography variant="h5" gutterBottom>
        Age: {user.age}
        </Typography>
        <Typography variant="h5" gutterBottom>
            Email: {user.email}
        </Typography>
        <Typography variant="h5" gutterBottom>
            Phone Number: {user.phoneNumber}
        </Typography>
        <Typography variant="h5" gutterBottom>
            Place: {user.place}
        </Typography>
        <Typography variant="h5" gutterBottom>
            Education: {user.education}
        </Typography>
        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Update Profile
        </Button>
      </Box>
    </div>
  );
};

export default Profile;