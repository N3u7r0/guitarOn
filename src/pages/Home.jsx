
import { Flex, Spinner } from "@chakra-ui/react";
import { UseProducts } from "../hooks";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";

export const Home = () => {
  const { productsData, loading } = UseProducts();
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
    <ItemListContainer products={productsData} />
  );
};