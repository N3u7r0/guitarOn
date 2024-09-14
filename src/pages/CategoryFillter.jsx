import { useState } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import { ItemListContainer } from "../components";
import { useProductsByCategory } from "../hooks";
export const CategoryFillter = () => {
  const { productsFillter, loading } = useProductsByCategory();
 
  return (
    loading ? (
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
    )
  );
};
