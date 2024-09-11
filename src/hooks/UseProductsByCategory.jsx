import { useState, useEffect } from "react";
import { getProductsByCategory } from "../services/products.Services";
import { UseSelectorClass } from "./UseSelectorClass";

export const UseProductsByCategory = () => {
  let { selectorClass } = UseSelectorClass();
  let [productsFillter, setProductsFillter] = useState([]);
  let [loading, setLoading] = useState(true);
  console.log(selectorClass);
  
  useEffect(() => {
    getProductsByCategory()
      .then((response) => {
        let array = response.config.url.data;

        let arrayFltrado = array.filter(
          (dato) => dato.producto === selectorClass
        ); /* aca va la info de el filtro */

        console.log(arrayFltrado);
        setProductsFillter(arrayFltrado);
      })
      .catch((err) => {
        console.error("error: " + err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { productsFillter, loading };
};
