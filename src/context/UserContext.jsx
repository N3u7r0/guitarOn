import { createContext, useState  } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userDataContext, setUserDataContext] =useState([])

  return (
    <UserContext.Provider value={{userDataContext, setUserDataContext}}>
        {children}
    </UserContext.Provider>
    
  );
};
