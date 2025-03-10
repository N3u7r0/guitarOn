import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const useProductsById = () => {
  const { stateProductsContext } = useContext(ProductsContext);
  const { id } = useParams();
  let [product, setProduct] = useState({});
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    // para llamar el producto de firebase
    const fetchProductoID = async () => {
      try {
        const docRef = doc(collection(db, "instrumentos"), id); // referencia del producto
        const docSnap = await getDoc(docRef); // obtengo el documento

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("No se encontró el producto con el id:", id);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    if (stateProductsContext.length === 0) {
      // si el contexto no tiene datos, llamo al producto de firebase
      fetchProductoID();
    } else {
      //busca un producto q coicida en el contexto con el id del parametro de la url
      const buscarProducto = stateProductsContext.find(
        (product) => product.id === id
      );


      /* s */
      if (buscarProducto) {
        setProduct(buscarProducto);
        setLoading(false);
      } else {
        fetchProductoID();
      }
    }
  }, [id, stateProductsContext]);

  return { product, loading };
};
