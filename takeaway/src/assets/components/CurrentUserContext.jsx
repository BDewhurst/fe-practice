import React, { createContext, useContext, useState } from "react";
import App from "../../App.jsx"


const AuthContext = createContext();

export const AuthProvider = () => {
  const [user, setUser] = useState(null); 

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <App /> 
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
