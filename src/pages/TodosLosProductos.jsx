import { Flex, Spinner } from "@chakra-ui/react";
import { ItemListContainer } from "../components";
import { UseProducts } from "../hooks";

export const TodosLosProductos = () => {
  const { products, loading } = UseProducts();
  return loading ? (
    <Flex
      width={"100%"}
      height={"90vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Spinner size="xl" />
    </Flex>
    ) : (
      <ItemListContainer products={products} />
    );

}
