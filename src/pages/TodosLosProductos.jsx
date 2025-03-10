import { ItemListContainer } from "../components";
import { useProducts } from "../hooks";

export const TodosLosProductos = () => {
  const { products, loading } = useProducts();

  return (
    <>
      <ItemListContainer products={products} loading={loading} />
    </>
  );
};
