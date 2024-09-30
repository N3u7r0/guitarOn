import { ItemListContainer } from "../components";
import { useProducts } from "../hooks";

export const TodosLosProductos = () => {
  const { products } = useProducts();

  return (
    <>
      <ItemListContainer products={products} />;
    </>
  );
};
