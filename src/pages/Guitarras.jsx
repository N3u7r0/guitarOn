import { Flex, Spinner } from "@chakra-ui/react";
import { ItemListContainer } from "../components";
import { useProductsByCategory,  } from "../hooks";

export const Guitarras = () => {
  let { productsFillter, loading } = useProductsByCategory("Guitarra");

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
    <ItemListContainer products={productsFillter} />
  );
};
