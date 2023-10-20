import React, { useState, useEffect } from "react";
import { findUser } from "../../../api";
import { useAuth } from "./CurrentUserContext";
import "../css/Login.css"
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
        <button type="submit">Login</button>
      </form>
      <div id="text-container">
    <div id="text"> To use the mock login function, please use one of the following usernames: 
    tech_guru, design_goddess, coding_ninja, code_wizard</div>
    </div>
    </div>
  );
}

export default Login;
