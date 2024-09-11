import { useState, useEffect } from "react";
import { getAllProducts } from "../services/products.Services";

export const useProducts = () => {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then((response) => {
        console.log(response.config.url);
        setProducts(response.config.url);
      })
      .catch((err) => {
        console.error("error: " + err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
};
