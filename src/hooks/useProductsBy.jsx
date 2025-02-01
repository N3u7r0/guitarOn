import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/productsContext";

export const useProductsById = () => {
   const { stateProductsContext } = useContext(ProductsContext);
  const { id } = useParams();
  let [product, setProduct] = useState({});
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    if (stateProductsContext.length === 0) {
      setLoading(true);
    } else {
      const productFound = stateProductsContext.find((product) => product.id === id);
      setProduct(productFound);
      setLoading(false);
    }
  }, []);

  return { product, loading };
};
