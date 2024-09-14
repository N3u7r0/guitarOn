import { useState, useEffect } from "react";
import { getAllProducts } from "../services/products.Services";
export const useProducts = () => {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then((response) => {
        setProducts(response.config.url.data);
        console.log(response.config.url.data);
      })
      .catch((err) => {
        console.error("error: " + err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
};
