import { useState, useEffect } from "react";
import { getProductsByCategory } from "../services/products.Services";

export const UseProductsByCategory = () => {
  let [productsFillter, setProductsFillter] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsByCategory()
      .then((response) => {
        setProductsFillter(response.config.url);
        console.log(response.config.url);
      })
      .catch((err) => {
        console.error("error: " + err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { productsFillter, loading };
};
