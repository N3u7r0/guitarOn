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
import imgDefault from "../../assets/images/imgDefault.jpg";
import { Link } from "react-router-dom";

export const ItemListContainer = ({ products }) => {
  return (
    <>
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} marginTop={"4rem"}>
        {products.map((product) => (
          <Card
            key={product.id}
            maxW="sm"
            margin={"2rem 1rem 0rem 1rem"}
            
            
            boxShadow={"1px 3px 5px rgba(0, 0, 0, 0.15) "}
            backgroundColor={"rgba(0, 0, 0, 0.05)"}
          >
            <CardBody>
              <Image
                src={imgDefault}
                alt={product.marca + " " + product.modelo}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{product.modelo}</Heading>
                <Text>{product.descripcion}</Text>
                <Text color="blue.600" fontSize="2xl">
                  ${product.precio}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="1">
                <Button variant="solid" color="white" backgroundColor={"rgba(15, 15, 15, 0.87)"} _hover={{ backgroundColor: "rgba(165, 0, 0, 0.87)" }}>
                  <Link to={`/item/${product.id}`}>
                    <strong>Ver mas</strong>
                  </Link>
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Box>
    </>
  );
};
