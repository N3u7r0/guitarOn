import { useState, useEffect } from "react";
import { getAllProducts } from "../services/products.Services";
import { useParams } from "react-router-dom";

export const useProducts = () => {
  let [loading, setLoading] = useState(true);
  const { categoria} = useParams(); // llamo al parametro que viene del navBar.
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((response) => {
        const data = response.config.url.data; //la datita
        let productosFiltrados;

        switch (categoria) {
          case "guitarra":
            productosFiltrados = data.filter(
              (product) => product.categoria === "guitarra"
            );
            break;
          case "bajo":
            productosFiltrados = data.filter(
              (product) => product.categoria === "bajo"
            );
            break;
          case "bateria":
            productosFiltrados = data.filter(
              (product) => product.categoria === "bateria"
            );
            break;
          
          default:
            productosFiltrados = data;
        }
        setProducts(productosFiltrados);
      })
      .catch((err) => {
        console.error("error: " + err);
      })
      .finally(() => setLoading(false));
  }, [categoria]);

  return { products, loading };
};
