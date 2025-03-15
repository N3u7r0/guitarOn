import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Inicializa el carrito desde el localStorage
  const [stateCartWidget, setStateCartWidget] = useState(() => {
    const storageCart = localStorage.getItem("carrito detalle");
    return storageCart ? JSON.parse(storageCart) : [];
  });

  // Inicializa el totalPrice desde el localStorage
  const [totalPrice, setTotalPrice] = useState(() => {
    const storageTotal = localStorage.getItem("total precio");
    return storageTotal ? parseFloat(storageTotal) : 0;
  });

  // actualiza el localStorage cuando cambie el carrito
  useEffect(() => {
    localStorage.setItem("carrito detalle", JSON.stringify(stateCartWidget));
  }, [stateCartWidget]);

  // actualiza el localStorage de el totalPrice
  useEffect(() => {
    localStorage.setItem("precio total", totalPrice.toString());
  }, [totalPrice]);

  const addItem = (product, count) => {
    const existingProduct = stateCartWidget.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      setStateCartWidget(
        stateCartWidget.map((item) =>
          item.id === product.id ? { ...item, count: item.count + count } : item
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
        totalPrice,
        setStateCartWidget,
        addItem,
        removeItem,
        deleteItem,
        setTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
