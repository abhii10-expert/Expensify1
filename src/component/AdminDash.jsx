import React, { useState, useEffect } from 'react';
import './adminDashboard.css'; // Import the CSS file
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const AdminDash = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await fetch(`/api/users/${userId}`, { method: 'DELETE' });
      fetchUsers();
    } catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
    }
  };

  const handleBlockUser = async (userId) => {
    try {
      await fetch(`/api/users/${userId}/block`, { method: 'PUT' });
      fetchUsers();
    } catch (error) {
      console.error(`Error blocking user with ID ${userId}:`, error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <TableContainer component={Paper} className="table-container">
        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>
                  <div className="button-container">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleBlockUser(user.id)}
                    >
                      Block
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminDash;