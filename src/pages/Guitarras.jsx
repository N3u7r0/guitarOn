
import { Flex, Spinner } from "@chakra-ui/react";
import { ItemListContainer } from "../components";
import { useProductsByCategory, useSelectorClass } from "../hooks";

export const Guitarras = () => {
  let { setSelectorClass } = useSelectorClass();
  setSelectorClass("Guitarra")
/*   de aca tiene que salir la respuesta */

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
