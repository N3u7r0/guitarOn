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
import { Spin } from "../Spin";

export const ItemDetailContainer = ({ product, loading }) => {
  // laprop llega vacia, recive el valor dsepues. falta solucionar eso

  return loading ? (
    <Spin />
  ) : (
    <Flex justifyContent={"center"} alignContent={"center"}>
      <Card
        key={product.id}
        justifyContent={"center"}
        w={"100vh"}
        marginTop={"20rem"}
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        backgroundColor={"rgba(0, 0, 0, 0.05)"}
        _hover={{ backgroundColor: "rgba(80, 000, 000, 0.10)" }}
        boxShadow={"0px 2px 10px rgba(255, 15, 15, 0.25) "}
      >
        <Image
          src={imgDefault}
          alt={product.marca + " " + product.modelo}
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
        />

        <Stack>
          <CardBody>
            <Heading size="md">{product.modelo}</Heading>
            <Text py="2">{product.descripcion_completa}</Text>
          </CardBody>

          <CardFooter>
            <Button
              variant="solid"
              color="white"
              backgroundColor={"rgba(165, 15, 15, 0.87)"}
              _hover={{ backgroundColor: "rgba(265, 15, 15, 0.87)" }}
            >
              Buy Latte
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Flex>
  );
};
