import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [stateCartWidget, setStateCartWidget] = useState(() => {
    // Inicializa el estado desde localStorage, si tiene algo guardado. (lo saque de copilot)
    const storageCart = localStorage.getItem("carrito detalle");
    return storageCart ? JSON.parse(storageCart) : [];
  });

  //actualiza el localStorage cuando cambie el carrito
  useEffect(() => {
    localStorage.setItem("carrito detalle", JSON.stringify(stateCartWidget));
  }, [stateCartWidget]);

  const addItem = (product, count) => {
    const existingProduct = stateCartWidget.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      setStateCartWidget(
        stateCartWidget.map((item) =>
          item.id === product.id
            ? { ...item, count: item.count + count }
            : item
        )
      );
    } else {
      setStateCartWidget([...stateCartWidget, { ...product, count }]);
    }
  };

  const removeItem = (product) => {
    const existingProduct = stateCartWidget.find(
      (item) => item.id === product.id
    );
    if (existingProduct) {
      if (existingProduct.count === 1) {
        setStateCartWidget(
          stateCartWidget.filter((item) => item.id !== product.id)
        );
      } else {
        setStateCartWidget(
          stateCartWidget.map((item) =>
            item.id === product.id ? { ...item, count: item.count - 1 } : item
          )
        );
      }
    }
  };

  const deleteItem = (product) => {
    setStateCartWidget(
      stateCartWidget.filter((item) => item.id !== product.id)
    );
  };

  return (
    <CartContext.Provider
      value={{
        stateCartWidget,
        addItem,
        removeItem,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
