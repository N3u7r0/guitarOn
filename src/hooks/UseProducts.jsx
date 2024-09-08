import { useEffect, useState } from "react";
import  {getAllProducts}  from "../services/productsServices";

export const UseProducts = () => {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState([]);

  useEffect(() => {
    
    getAllProducts().then((response) => {
      setProducts(response);
    }).catch((err) => {
      console.error("error: " + err);
    }).finally(() => setLoading(false));

  }, [])

  return { products, loading};
};
