
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './UserAll.css';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div className='userList'>
      {users.map((user) => (
        <Link to={`/userDetails/${user.id}`} key={user.id}>
          <ul className="list-group">
            <li className="list-group-item list-group-item-info">{user.name}</li>
          </ul>
        </Link>
      ))}
    </div>
  );
}

export default UserList;
