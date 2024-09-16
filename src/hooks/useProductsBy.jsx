import { useState, useEffect } from "react";
import { getAllProducts } from "../services/products.Services";
import { useParams } from "react-router-dom";

export const useProductsById = () => {
  const { id } = useParams();
  let [product, setProduct] = useState({});
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then((response) => {
        setProduct(response.config.url.data[id]);
      })
      .catch((err) => {
        console.error("error: " + err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { product  , loading  };
};

/* 
useEffect(() => {
  getAllProducts()
    .then((response) => {
      let { data } = response.config.url;
      let filtroID = data.filter((product) => product.id == parseInt(id));         // ojo!, el product.id no retorna un numero porque es un string
      
      setProduct(filtroID);
    })
    .catch((err) => {
      console.error("error! " + err);
    })
    .finally(() => setLoading(false));
}, [id]);
 */
