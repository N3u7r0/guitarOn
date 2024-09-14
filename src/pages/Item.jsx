import { Flex, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useProducts } from "../hooks";
import { ItemDetailContainer } from "../components";

export const Item = () => {
  const { id } = useParams();
  const { product, loading } = useProducts(id);

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
      <ItemDetailContainer product={product} />
    );
};
