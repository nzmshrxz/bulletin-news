import { auth } from "@/firebase/fireBaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

const { createContext, useState, useEffect, useContext } = require("react");




const AuthContext = createContext()

export const AuthProvider = ({children}) =>{

  const [currentUser, setCurrentUser] = useState(null)

  
  const logout = () => {
    const isConfirmed  = window.confirm("Are you sure you want to logout?")
    if (isConfirmed) {
      signOut(auth)
        .then(() => {
          alert("User signed out");
        })
        .catch((error) => {
          console.error("Sign out error", error);
        });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      setCurrentUser(user)
    })
    return () => unsubscribe()
  }, [])
  
  return (
    <AuthContext.Provider value={{currentUser, logout}}>
      {children}
    </AuthContext.Provider>
  )

}

export const useAuth  =  () => useContext(AuthContext)