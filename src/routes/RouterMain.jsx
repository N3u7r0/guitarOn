import { Routes, Route } from "react-router-dom";
import {
  Home,
  Ofertas,
  Nosotros,
  TodosLosProductos,
  Item,
  CheckOut,
  Pagar,
} from "../pages";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ofertas" element={<Ofertas />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/category/:categoria" element={<TodosLosProductos />} />
      <Route path="/item/:id" element={<Item />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/pagar" element={<Pagar />} />
    </Routes>
  );
};
