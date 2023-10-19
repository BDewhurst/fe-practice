import React from "react";
import { useAuth } from "./CurrentUserContext";

function Profile() {
  const { user } = useAuth();
console.log(user)
  if (user) {
    return <div>You are logged in as {user[0].name}</div>;
  } else {
    return <div>You are not logged in.</div>;
  }
}

export default Profile
