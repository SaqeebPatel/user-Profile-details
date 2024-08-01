
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './UserAll.css';

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  const userBackgrounds = {
    
    
  
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the user data!", error);
      });
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const backgroundImage = userBackgrounds[user.name] || "default-background-image-url.jpg";

  return (
    <div className="container mt-5 user-details-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="mb-3 mt-2">
        <div className="row">
          <div className="col">
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBuZ3xlbnwwfHwwfHx8MA%3D%3D"
              className="img-fluid rounded-start"
              alt="..."
              style={{ width: "100%" }}
            />
          </div>
          <div className="col" style={{ width: "100%" }}>
            <h5 className="title">Name: {user.name}</h5>
            <p className="title">Username: {user.username}</p>
            <p className="title">Email: {user.email}</p>
            <p className="card-title">City: {user.address.city}</p>
            <p className="card-title">Company: {user.company.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
