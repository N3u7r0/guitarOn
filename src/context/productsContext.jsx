import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => { 
  const [stateProductsContext, setStateProductsContext] = useState([]);
  console.log(stateProductsContext);
  return (
    <ProductsContext.Provider value={{ stateProductsContext, setStateProductsContext }}> 
      {children}
    </ProductsContext.Provider>
  );
};
