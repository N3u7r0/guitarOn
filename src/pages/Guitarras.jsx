
import { Flex, Spinner } from "@chakra-ui/react";
import { ItemListContainer } from "../components";
import { UseProductsByCategory } from "../hooks";
import { UseSelectorClass } from "../hooks";

export const Guitarras = () => {
  let { setSelectorClass } = UseSelectorClass();
  setSelectorClass("Guitarra")
/*   de aca tiene que salir la respuesta */

  const { productsFillter, loading } = UseProductsByCategory();
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
