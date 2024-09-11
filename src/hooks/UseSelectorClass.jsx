import { useState } from "react";

export const UseSelectorClass = () => {
  let [selectorClass, setSelectorClass] = useState("x");
  return { selectorClass, setSelectorClass };
};

// tenes q traer el dato de selector class con esta funcion con un useState
// y mandar el resultado a useProductsByCategory y terminaste con esta entrega




