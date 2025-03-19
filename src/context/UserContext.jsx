import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => { 
  const [userDataContext, setUserDataContext] = useState([]);
  console.log(userDataContext);
  
  return (
    <UserContext.Provider value={{userDataContext, setUserDataContext }}> 
      {children}
    </UserContext.Provider>
  );
};

