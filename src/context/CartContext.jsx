import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [numberCartWidget, setNumberCartWidget] = useState(0);

  const addItem = (quantity = 1) => {
    setNumberCartWidget((prevCount) => prevCount + quantity);
  };

  return (
    <CartContext.Provider value={{ numberCartWidget, setNumberCartWidget, addItem }}>
      {children}
    </CartContext.Provider>
  );
};