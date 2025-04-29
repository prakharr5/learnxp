import React from "react";
import { user } from "../utils/data";

function Profile() {
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-card">
        <img src={user.avatar} alt="Avatar" />
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Points: {user.points}</p>
      </div>
    </div>
  );
}

export default Profile;
