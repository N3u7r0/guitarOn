import { useEffect } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import { ItemListContainer } from "../components";
import { useProductsByCategory, useSelectorClass } from "../hooks";

export const Guitarras = () => {
  let { setSelectorClass } = useSelectorClass();

  useEffect(() => {
    setSelectorClass("Guitarra");

    console.log("setSelectorClass desde guitarras  " + setSelectorClass());
  }, []);

  //sin  el array vacio se renderice siempre que se monte el componente.

  //con el array se renderiza siempre que el contenido del hook sufra un cambio.

  // con una dependencia se renderiza cuando la misma cambia.

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
