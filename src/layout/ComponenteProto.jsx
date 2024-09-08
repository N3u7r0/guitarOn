


import {
  Box,
  Card,
  Stack,
  Heading,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import products from "../data/products.json"
import imgDefault from "../assets/images/imgDefault.jpg"
let typeSelect = products.filter((producto) => { producto })





const ItemListContainer = () => {
  console.log(typeSelect);
  
  return (
    <Box display={"flex"} flexWrap={"wrap"}>
      {products.map((typeSelect) => (
        <Card key={typeSelect.id} maxW="sm" margin={"1rem"}>
          <CardBody>
            <Image
              src={(imgDefault)}
              alt={typeSelect.producto}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{typeSelect.modelo}</Heading>
              <Text>{typeSelect.descripcion}</Text>
              <Text color="blue.600" fontSize="2xl">
                {typeSelect.precio}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Box>
  );
};

export default ItemListContainer