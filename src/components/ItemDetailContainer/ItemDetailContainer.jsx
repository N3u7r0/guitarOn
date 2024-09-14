import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
  Stack,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import imgDefault from "../../assets/images/imgDefault.jpg";

export const ItemDetailContainer = ({ product }) => {
  return (
    <Flex justifyContent={"center"} alignContent={"center"} >
      <Card
     
        key={product.id}
        justifyContent={"center"}
        minW={"60vh"}
        w={"100vh"}
        margin={"35vh 30vh 0vh 30vh"}
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        boxShadow={"3px 3px 25px rgba(265, 0, 0, 0.57) "}
        backgroundColor={"rgba(0, 0, 0, 0.05)"}
      >
        <Image
          src={imgDefault}
          alt={product.marca + " " + product.modelo}
          objectFit="cover"
          maxW={{ base: "100%", sm: "240px" }}
        />

        <Stack>
          <CardBody>
            <Heading itemType="h5" size="md">
              {product.marca}
            </Heading>
            <Heading itemType="h6" size="m">
              {product.modelo}
            </Heading>
            <Text py="2">{product.descripcion_completa}</Text>
            <Text color="red.400" fontSize="2xl">
              ${product.precio}
            </Text>
          </CardBody>

          <CardFooter>
            <Button
              variant="solid"
              color={"white"}
              backgroundColor={"rgba(165, 0, 0, 0.87)"}
              _hover={{ backgroundColor: "rgb(999, 1, 2)" }}
            >
              Agregar al carrito
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Flex>
  );
};
