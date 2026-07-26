import { Navigate } from "react-router-dom";
import {getAccessToken} from "./tokenStorage";
import React from "react";

const PrivateRoute=({children})=>{
    const accessToken=getAccessToken();
    if(!accessToken){
        return <Navigate to="/" replace />
    }

    return children;
};

export default PrivateRoute;