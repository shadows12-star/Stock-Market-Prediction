import React from 'react'
import {useEffect,useContext,createContext,useState} from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

 const [isAuthenticated, setIsAuthenticated] = useState(
  !!localStorage.getItem("access_token")
);



  return (
    <AuthContext.Provider value={{ isAuthenticated ,setIsAuthenticated}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export {AuthContext};