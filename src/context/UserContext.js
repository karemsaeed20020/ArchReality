import { createContext, useEffect, useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../config/firebase";

export const userContext=createContext();
export default function UserProvider({children}){
    const [token,setToken]=useState(null);
    // const [userName,setUserName]=useState(null);
    const [firstNamee, setFirstNamee] = useState(null);
  const [lastNamee, setLastNamee] = useState(null);
  const [image, setImage] = useState(null);
  const [user, setUser] = useState(null);


  useEffect(() => console.log(token), [token]);
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // Update profile information from Google user object
  //       setFirstNamee(user.displayName.split(" ")[0]);
  //       setLastNamee(user.displayName.split(" ")[1]);
  //       setImage(user.photoURL);
  //     } else {
  //       // Reset profile information if user is not authenticated
  //       setFirstNamee(null);
  //       setLastNamee(null);
  //       setImage(null);
  //     }
  //   });
  //   return () => unsubscribe();
  // }, []);
  
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
        setImage,
    }
    return(
        <userContext.Provider value={values}>
            {children}
        </userContext.Provider>
    )
}