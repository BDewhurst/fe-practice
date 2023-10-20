import React from "react";
import { useAuth } from "./CurrentUserContext";
import "../css/profile.css";
import { PiSmileySad } from "react-icons/pi";
import "../css/nav.css";

function Profile() {
  const { user } = useAuth();

  if (user) {
    return (
      <div>
        {" "}
        <img src={user[0].avatar_url} id="avatar" />
        {user[0].name}
      </div>
    );
  } else {
    return (
      <div className="nav_link">
      <div className="icon-container">
          <PiSmileySad className="icon"/>
          <p className="icon-text">Logged Out </p>
          </div>
      </div>
    );
  }
}

export default Profile;
