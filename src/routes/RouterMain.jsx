import { Routes, Route } from "react-router-dom";
import {
  Home,
  Contacto,
  TodosLosProductos,
  Item,
  DetalleCarrito,
  CheckOut,
  MiCuenta,
} from "../pages";


export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="/Categoria/:categoria" element={<TodosLosProductos />} />
      <Route path="/Item/:id" element={<Item />} />
      <Route path="/DetalleCarrito" element={<DetalleCarrito />} />
      <Route path="/CheckOut" element={<CheckOut />} />
      <Route path="/MiCuenta" element={<MiCuenta />} />
    </Routes>
  );
};
