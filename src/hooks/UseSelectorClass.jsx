import { useState } from "react";

export const useSelectorClass = () => {
  let [selectorClass, setSelectorClass] = useState(" ");
  return { selectorClass, setSelectorClass };
};

// tenes q traer el dato de selector class con esta funcion con un useState
// y mandar el resultado a useProductsByCategory y terminaste con esta entrega




