import { useState, useEffect } from "react";
import { getProductsByCategory } from "../services/products.Services";
import { useSelectorClass } from "./useSelectorClass"

export const useProductsByCategory = () => {
  let [productsFillter, setProductsFillter] = useState([]);
  let [loading, setLoading] = useState(true);
  let { selectorClass } = useSelectorClass();
 
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
