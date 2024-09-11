import { Flex, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ItemListContainer } from "../components";
import { UseProductsByCategory } from "../hooks";

export const Baterias = () => {
  const { id } = useParams();
  const { productsFillter, loading } = UseProductsByCategory(id);
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
