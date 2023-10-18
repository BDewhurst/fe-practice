import React, { useState, useEffect } from "react";
import { findUser } from "../../../api";

function Login() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState([]);


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (username) {
      findUser(username).then((data) => {
        setUserData(data);
        });
    }
}, [username]); 

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
