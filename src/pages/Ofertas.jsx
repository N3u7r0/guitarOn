import { Heading ,Flex} from "@chakra-ui/react";
import { ItemListContainer } from "../components";
import { useProductsOffer } from "../hooks";

export const Ofertas = () => {
  const { productsOffer } = useProductsOffer();

  return (
    <Flex>
    <Heading  itemType={"h2"} size={"xl"} _hover={{ color: "red.500" }}>
      Ofertas
    </Heading>

    <ItemListContainer products={productsOffer} />
    </Flex>
  );
};
