import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [numberCartWidget, setNumberCartWidget] = useState(0);

const addItem = () => {
  setNumberCartWidget(numberCartWidget + 1);
};
const deleteItem = () => {
  setNumberCartWidget(numberCartWidget - 1);
};

  return (
    <CartContext.Provider value={{ numberCartWidget, setNumberCartWidget,addItem,deleteItem }}>
      {children}
    </CartContext.Provider>
  );
};
