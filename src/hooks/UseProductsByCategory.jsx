import { useState, useEffect } from "react";
import { getProductsByCategory } from "../services/products.Services";
import { useSelectorClass } from "./useSelectorClass";

export const useProductsByCategory = () => {
  let [productsFillter, setProductsFillter] = useState([]);
  let [loading, setLoading] = useState(true);
  let { selectorClass, setSelectorClass } = useSelectorClass();

  useEffect(() => {
    getProductsByCategory()
      .then((response) => {
        let array = response.config.url.data;




        /* aca va la info de el filtro */
        let arrayFiltrado = array.filter((dato) => dato.producto === selectorClass);
        console.log(selectorClass);
        








        setProductsFillter(arrayFiltrado);
        console.log("Array Filtrado:", arrayFiltrado);
      })
      .catch((err) => {
        console.error("error: " + err);
      })
      .finally(() => setLoading(false));
  }, [setSelectorClass]);

  return { productsFillter, loading };
};
