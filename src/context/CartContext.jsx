import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [stateCartWidget, setStateCartWidget] = useState([]);
  console.log(stateCartWidget);
  
  const addItem = (product, count) => {
    const existingProduct = stateCartWidget.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      // Si el producto ya esta en el carrito, actualizamos la cantidad sumando la cantidad pasada
      setStateCartWidget(
        stateCartWidget.map((item) =>
          item.id === product.id
            ? { ...item, count: item.count + count } // Suma la cantidad especificada. aca esta el problema, si se pasa un count, no se suma... si se pasa un 1, si se suma pero si quero sumar al numero guardo mas de 1 unidad, solamente me va a dejar agruegar 1 solo
            : item
        )
      );
    } else {
      // Si el producto no está en el carrito, lo agregamos con la cantidad especificada
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
