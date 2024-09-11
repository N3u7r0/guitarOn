import { useState, useEffect } from "react";
import { getProductsById } from "../services/products.Services";

export const UseProductsById = (id) => {
  let [product, setProduct] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsById(id)
      .then((response) => {
        setProduct(response.config.url[id]);
        console.log(response.config.url[id]);
      })
      .catch((err) => {
        console.error("error! " + err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { product, loading };
};
