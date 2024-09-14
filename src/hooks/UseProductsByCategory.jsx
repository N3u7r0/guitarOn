import { useState, useEffect } from "react";
import { getAllProducts } from "../services";
export const useProductsByCategory = () => {
  let [productsFillter, setProductsFillter] = useState([]);
  let [loading, setLoading] = useState(true);
  let [valorFiltro, setValorFiltro] = useState("nada");


  const clickGuitarras = () => {
    setValorFiltro("guitarra");
    console.log(valorFiltro);
  };
  const clickBajos = () => {
    setValorFiltro("bajo");
    console.log(valorFiltro);
  };
  const clickBaterias = () => {
    setValorFiltro("bateria");
    console.log(valorFiltro);
  };

  useEffect(() => {
    getAllProducts()
      .then((response) => {
        let arrayProductos = response.config.url.data;
        console.log( arrayProductos);
        
        let arrayProductosFiltrados = arrayProductos.filter(
          (dato) => dato.tipo === valorFiltro
        );
        console.log( arrayProductosFiltrados);
        


        setProductsFillter(arrayProductosFiltrados);
      })
      .catch((err) => {
        console.error("error: " + err);
      })
      .finally(() => setLoading(false));
  }, [valorFiltro]);

  console.log(valorFiltro);
  

  return {
    productsFillter,
    loading,
    clickGuitarras,
    clickBajos,
    clickBaterias,
  };
};
