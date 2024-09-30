import { useState, useEffect } from "react";
import { getAllProducts } from "../services/products.Services";

export const useProductsOffer = () => {
  let [loading, setLoading] = useState(true);

  const [productsOffer, setProductsOffer] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((response) => {
        const data = response.config.url.data; //la datita

        let productosFiltrados = data.filter(
          (product) => product.oferta === true
        );

        setProductsOffer(productosFiltrados);
      })
      .catch((err) => {
        console.error("error: " + err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { productsOffer, loading };
};
