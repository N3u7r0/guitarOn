
import { useEffect } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import { ItemListContainer } from "../components";
import { useProductsByCategory, useSelectorClass } from "../hooks";

export const Guitarras = () => {
  let { setSelectorClass } = useSelectorClass();







 useEffect(() => {
   setSelectorClass("Guitarra")
  });//sin array vacio para que se renderice siempre que se monte el componente

 














  const { productsFillter, loading } = useProductsByCategory();
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
