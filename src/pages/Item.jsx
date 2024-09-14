import { ItemDetailContainer } from "../components";
import { useProductsById } from "../hooks";

export const Item = () => {
  const { product } = useProductsById();
  return <ItemDetailContainer product={product} />;
};
