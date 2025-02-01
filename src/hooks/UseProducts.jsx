import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import { ProductsContext } from "../context/productsContext";

export const useProducts = () => {
  const { stateProductsContext, setStateProductsContext } =
    useContext(ProductsContext);
  const { categoria } = useParams(); // llamo al parametro que viene del navBar.
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const coleccionDeProductos = collection(db, "instrumentos");

    getDocs(coleccionDeProductos)
      .then((snapshot) => {
        const dataFirebase = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        let productosFiltrados;
        switch (categoria) {
          case "guitarra":
            productosFiltrados = dataFirebase.filter(
              (product) => product.categoria === "guitarra"
            );
            break;
          case "bajo":
            productosFiltrados = dataFirebase.filter(
              (product) => product.categoria === "bajo"
            );
            break;
          case "bateria":
            productosFiltrados = dataFirebase.filter(
              (product) => product.categoria === "bateria"
            );
            break;

          default:
            productosFiltrados = dataFirebase;
        }

        setProducts(productosFiltrados);
        setStateProductsContext(productosFiltrados); // Corregido
      })
      .catch((err) => console.error("error: " + err))
      .finally(() => setLoading(false));
  }, [categoria, setStateProductsContext]); // Corregido

  return { products, loading };
};
