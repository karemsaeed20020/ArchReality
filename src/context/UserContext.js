import { createContext, useEffect, useState } from "react";

export const userContext=createContext();
export default function UserProvider({children}){
    const [token,setToken]=useState(null);
    // const [userName,setUserName]=useState(null);
    const [firstNamee, setFirstNamee] = useState(null);
  const [lastNamee, setLastNamee] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => console.log(token), [token]);

  const fullName = `${firstNamee} ${lastNamee}`;
    
    useEffect(()=>console.log(token),[token]);
    const values={
        token,
        setToken,
        // userName,setUserName
        firstNamee,
        setFirstNamee,
        lastNamee,
        setLastNamee,
        fullName,
        image,
        setImage
    }
    return(
        <userContext.Provider value={values}>
            {children}
        </userContext.Provider>
    )
}