import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [numberCartWidget, setNumberCartWidget] = useState(0);

  return (
    <CartContext.Provider value={{ numberCartWidget, setNumberCartWidget }}>
      {children}
    </CartContext.Provider>
  );
};
