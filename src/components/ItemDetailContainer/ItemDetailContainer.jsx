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


export const ItemDetailContainer = ({ product}) => {
 
 
  console.log(product);
// laprop llega vacia, recive el valor dsepues. falta solucionar eso







  return loading ? (
    <Spin />
  ) : (
    <Flex justifyContent={"center"} alignContent={"center"}>
      <Card
        key={product.id}
        justifyContent={"center"}
        w={"100vh"}
        margin={"20vh"}
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
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
            <Text py="2">{product.descripcion}</Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Buy Latte
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Flex>
  );
};
