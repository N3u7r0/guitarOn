import { createContext, useState  } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const  [stateUserContext, setStateUserContext] =useState([])

  return (
    <UserContext.Provider value={{stateUserContext, setStateUserContext}}>
        {children}
    </UserContext.Provider>
    
  );
};
