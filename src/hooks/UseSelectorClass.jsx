import { useState } from "react";

export const useSelectorClass = () => {
  let [selectorClass, setSelectorClass] = useState("no guarde nada!");
  
  return { selectorClass, setSelectorClass};
};