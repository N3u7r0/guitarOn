import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import { ProductsContext } from "../context/ProductsContext";

export const useProducts = () => {
  const { stateProductsContext, setStateProductsContext } = useContext(ProductsContext);
  const { categoria } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const coleccionDeProductos = collection(db, "instrumentos");

    if (stateProductsContext.length === 0) {
      //si no hay nada en el contexto, trae los datos de firebase
      getDocs(coleccionDeProductos)
        .then((snapshot) => {
          const dataFirebase = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setStateProductsContext(dataFirebase); // Actualiza el contexto con los productos de firebase

          // Filtra los productos basados en la categoría
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

          setProducts(productosFiltrados); // Actualiza los productos filtrados
          console.log("productos filtrados desde firebase");
        })
        .catch((err) => console.error("error: " + err))
        .finally(() => setLoading(false));
    } else {
      // Filtra los productos basados en la categoria directamente del contexto
      let productosFiltrados;
      switch (categoria) {
        case "guitarra":
          productosFiltrados = stateProductsContext.filter(
            (product) => product.categoria === "guitarra"
          );
          break;
        case "bajo":
          productosFiltrados = stateProductsContext.filter(
            (product) => product.categoria === "bajo"
          );
          break;
        case "bateria":
          productosFiltrados = stateProductsContext.filter(
            (product) => product.categoria === "bateria"
          );
          break;
        default:
          productosFiltrados = stateProductsContext;
      }

      setProducts(productosFiltrados);
      setLoading(false);
      console.log("productos filtrados desde el contexto");
     
      

    }
  }, [categoria, stateProductsContext, setStateProductsContext]);


  return { products, loading };
};
