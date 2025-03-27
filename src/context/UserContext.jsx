import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => { 
  const [userDataContext, setUserDataContext] = useState([]);
  const [userProductsContext,SetUserProductsContext] = useState([]);
  
  
  return (
    <UserContext.Provider value={{userDataContext, setUserDataContext,userProductsContext,SetUserProductsContext }}> 
      {children}
    </UserContext.Provider>
  );
};

