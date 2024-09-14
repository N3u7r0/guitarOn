import { Routes, Route } from "react-router-dom";
import {
  Home,
  Ofertas,
  Nosotros,
  TodosLosProductos,
  CategoryFillter,
  Item,
} from "../pages";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ofertas" element={<Ofertas />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/todosLosProductos" element={<TodosLosProductos />} />
      <Route path="/category/:category" element={<CategoryFillter />} />
      <Route path="/item/:id" element={<Item />} />
    </Routes>
  );
};
