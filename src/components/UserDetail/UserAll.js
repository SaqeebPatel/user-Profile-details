
import React from 'react';
import UserDetails from './UserDetails';
import UserList from './UserList';
import { Routes, Route } from 'react-router-dom';
import './UserAll.css';

function UserAll() {
  return (
    <div className="user-all-container">
      <div className="user-list-container">
        <UserList />
      </div>
      <div className="user-details-container">
        <Routes>
          <Route path="/userDetails/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default UserAll;
