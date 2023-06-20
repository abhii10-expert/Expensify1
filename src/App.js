import React, { useState } from 'react';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import AdminDash from './components/AdminDash';
import Profile from './components/Profile';
import Home from './components/Home';
import SignUp from './components/SignUp';
import UserDash from './components/UserDash';
import Add from './components/Add';

function App() {
  const [user, setUser] = useState({});
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/admin" element={<AdminDash/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/user" element={<UserDash/>} />
        <Route path="/add" element={<Add  userId={user.email}/>} />
      </Routes>
    </div>
  );
}

export default App;
