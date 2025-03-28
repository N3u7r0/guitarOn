import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => { 
  const [userDataContext, setUserDataContext] = useState([]);
  const [userRequestContext,SetUserRequestContext] = useState([]);
  
  
  return (
    <UserContext.Provider value={{userDataContext, setUserDataContext,userRequestContext,SetUserRequestContext }}> 
      {children}
    </UserContext.Provider>
  );
};

