import { ItemDetailContainer } from "../components";
import { useProductsById } from "../hooks";

export const Item = () => {
  const { product, loading } = useProductsById();
  return (
    <ItemDetailContainer product={product} loading={loading} />
  );
};
