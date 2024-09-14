/* 

import { useState, useEffect } from "react";
import { getAllProducts } from "../services/products.Services";
import { useParams } from "react-router-dom";

export const useProducts = () => {
  const { categoria } = useParams(); //LLamo al parametro que viene por URL del navBar.

  const switchCategoria = () => {
    switch (categoria) {
      case "guitarra":
        return console.log("guitarra");

      case "bajo":
        return console.log("bajo");

      case "bateria":
        return console.log("bateria");

      default:
        return console.log("todos");
    }
  };
  switchCategoria();

  let [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((response) => {
        setProducts(response.config.url.data); //=========> la datita !
      })
      .then(() => {
       let arrayCompleto = setProducts;
         
       
      })
      .catch((err) => {
        console.error("error: " + err);
      });
  }, []);

  return { products };
};

 */

import { useState, useEffect } from "react";
import { getAllProducts } from "../services/products.Services";
import { useParams } from "react-router-dom";

export const useProducts = () => {
  const { categoria } = useParams(); // Llamo al parámetro que viene por URL del navBar.
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((response) => {
        const data = response.config.url.data; //la datita
        let ProductosFiltrados;

        switch (categoria) {
          case "guitarra":
            ProductosFiltrados = data.filter((product) => product.categoria === "guitarra");
            console.log("guitarraaaa");
            break;
          case "bajo":
            ProductosFiltrados = data.filter((product) => product.categoria === "bajo");
            console.log("bajooooo");
            break;
          case "bateria":
            ProductosFiltrados = data.filter((product) => product.categoria === "bateria");
            console.log("bateriaaaaaaa");
            
            break;
          default:
            ProductosFiltrados = data;
        }
        setProducts(ProductosFiltrados);
      })
      .catch((err) => {
        console.error("error: " + err);
      });
  }, [categoria]);

  return { products };
};