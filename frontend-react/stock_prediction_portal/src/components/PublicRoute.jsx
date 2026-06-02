import React from 'react'
import { useState, useEffect } from 'react';
import {AuthContext} from "./AuthProvider";
import {useContext} from "react";
import {Navigate} from "react-router-dom";


const PublicRoute = ({children}) => {
    const { isAuthenticated } = useContext(AuthContext);
    {if (!isAuthenticated) {
        return children;
      } else {
        return <Navigate to="/dashboard" />;
      }
    }
 
}

export default PublicRoute