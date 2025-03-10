import { useState, useEffect, useContext } from "react";
import { collection, getDocs } from "firebase/firestore"; 
import { ProductsContext } from "../context/ProductsContext";
import { db } from "../firebase";

export const useProductsOffer = () => {
  let [loading, setLoading] = useState(true);
  const [productsOffer, setProductsOffer] = useState([]);
  const { stateProductsContext, setStateProductsContext } =
    useContext(ProductsContext);

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
