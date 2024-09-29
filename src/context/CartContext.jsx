import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [stateCartWidget, setStateCartWidget] = useState([]);

  const addItem = (product, count) => {
    const existingProduct = stateCartWidget.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      // Si el producto ya está en el carrito, actualizamos la cantidad, sumando solo la diferencia
      setStateCartWidget(
        stateCartWidget.map((item) =>
          item.id === product.id
            ? { ...item, count: item.count + 1 } // Aquí solo sumamos 1 a la cantidad existente
            : item
        )
      );
    } else {
      // Si el producto no está en el carrito, lo agregamos
      setStateCartWidget([...stateCartWidget, { ...product, count }]);
    }
  };

  const removeItem = (product) => {
    const existingProduct = stateCartWidget.find(
      (item) => item.id === product.id
    );
    if (existingProduct) {
      // Si la cantidad es 1, eliminamos el producto del carrito
      if (existingProduct.count === 1) {
        setStateCartWidget(
          stateCartWidget.filter((item) => item.id !== product.id)
        );
      } else {
        // Si la cantidad es mayor a 1, restamos 1 a la cantidad existente
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
        setStateCartWidget,
        addItem,
        deleteItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
