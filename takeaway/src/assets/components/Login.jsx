import React, { useState, useEffect } from "react";
import { findUser } from "../../../api";
import { useAuth } from "./CurrentUserContext";
function Login() {
  const [username, setUsername] = useState('');



  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username) {
      findUser(username).then((userData) => {
        login(userData);
      });
    }
  };



  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default Login;
