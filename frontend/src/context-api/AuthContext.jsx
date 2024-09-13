import { createContext, useContext } from "react";
import React, { useState } from 'react';

export const AuthContext = createContext();

export const useAuthContext=()=>{
    return useContext(AuthContext);
}
export const AuthContextProvider =({children})=>{
    const[authorizeduser, setauthorizeduser]= useState(JSON.parse(localStorage.getItem("chat-user")||null))
    return <AuthContext.Provider value ={{authorizeduser, setauthorizeduser}}>
        {children}
    </AuthContext.Provider>
}