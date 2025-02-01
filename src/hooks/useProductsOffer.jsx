import { useState, useEffect, useContext } from "react";
import { collection, getDocs } from "firebase/firestore"; // Asegúrate de importar las funciones de Firestore
import { ProductsContext } from "../context/productsContext";
import { db } from "../firebase";

export const useProductsOffer = () => {
  let [loading, setLoading] = useState(true);
  const { stateProductsContext, setStateProductsContext } =
    useContext(ProductsContext);
  const [productsOffer, setProductsOffer] = useState([]);

  useEffect(() => {
    const coleccionDeProductos = collection(db, "instrumentos");

    if (stateProductsContext.length === 0) {
      getDocs(coleccionDeProductos)
        .then((snapshot) => {
          const dataFirebase = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setStateProductsContext(dataFirebase);

          const filteredProducts = dataFirebase.filter(
            (product) => product.oferta === true
          );
          setProductsOffer(filteredProducts);
          setLoading(false);
        })
        .catch((err) => console.error("error: " + err))
        .finally(() => setLoading(false));
    } else {
      const filteredProducts = stateProductsContext.filter(
        (product) => product.oferta === true
      );
      setProductsOffer(filteredProducts);
      setLoading(false);
    }
  }, [stateProductsContext, setStateProductsContext]);
  return { productsOffer, loading };
};
