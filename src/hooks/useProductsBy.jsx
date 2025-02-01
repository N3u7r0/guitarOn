import { collection,getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

export const useProductsById = () => {
  const { id } = useParams();
  let [product, setProduct] = useState({});
  let [loading, setLoading] = useState(true);

  useEffect(() => {
     let coleccionDeProductos = collection(db, "instrumentos");
    getDocs(coleccionDeProductos)
      .then((response) => {
        setProduct(coleccionDeProductos.id);
      })
      .catch((err) => {
        console.error("error: " + err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { product, loading };
};
