import { Routes, Route } from "react-router-dom";
import {
  Home,
  Contacto,
  TodosLosProductos,
  Item,
  DetalleCarrito,
  Pagar,
  MiCuenta,
} from "../pages";


export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="/category/:categoria" element={<TodosLosProductos />} />
      <Route path="/item/:id" element={<Item />} />
      <Route path="/DetalleCarrito" element={<DetalleCarrito />} />
      <Route path="/pagar" element={<Pagar />} />
      <Route path="/MiCuenta" element={<MiCuenta />} />
    </Routes>
  );
};
