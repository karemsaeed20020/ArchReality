import { createContext, useEffect, useState } from "react";

export const userContext=createContext();
export default function UserProvider({children}){
    const [token,setToken]=useState(null);
    const [userName,setUserName]=useState(null);
    
    useEffect(()=>console.log(token),[token]);
    const values={
        token,
        setToken,
        userName,setUserName
    }
    return(
        <userContext.Provider value={values}>
            {children}
        </userContext.Provider>
    )
}