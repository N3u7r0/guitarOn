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
  Grid,

} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Spin } from "../../../components";
import imgDefault from "../../../assets/images/imgDefault.jpg";

export const ItemListContainer = ({ products, loading }) => {
  return loading ? (
    <Spin />
  ) : (
    <>
      <Grid
        templateColumns="repeat(auto-fit, minmax(350px, 1fr))"
        gap={{ base: "4vw", lg: "3vw", xl: "2vw" }}
        m="2vh 2vw 10vh 2vw"
        placeItems="center"
      >
        {products.map((product) => (
          <Card
            display="flex"
            justify="center"
            key={product.id}
            h="100%"
            margin={"2rem 1rem 0rem 1rem"}
            backgroundColor={"rgba(0, 0, 0, 0.05)"}
            transition="0.5s"
            _hover={{
              backgroundColor: "rgba(180, 0, 0, 0.2)",
              boxShadow: "-5px 2px 20px 1px rgba(80, 0, 0, 0.5)",
              transition: "0.2s"
            }}

            boxShadow={"1px 3px 5px rgba(0, 0, 0, 0.3) "}
          >
            <Image
              src={product.image || imgDefault}
              alt={product.marca + " " + product.modelo}
              borderRadius="lg"
            />
            <CardBody>

              <Text color="red.500" h="6" marginBottom="0.2rem" textAlign="center">
                <b>{product.categoria}</b>
              </Text>

              <Stack mt="6" spacing="3">
                <Heading itemType="h5" size="md">
                  {product.marca}
                </Heading>
                <Heading itemType="h6" size="m">
                  {product.modelo}
                </Heading>
                <Text>{product.descripcion_card}</Text>
                <Text color="red.500" fontSize="2xl">
                  ${product.precio}
                </Text>
              </Stack>
            </CardBody>

            <Divider />

            <CardFooter>
              <ButtonGroup spacing="1">
                <Button
                  variant="solid"
                  color="white"
                  backgroundColor={"rgba(15, 15, 15, 0.87)"}
                  _hover={{ backgroundColor: "rgba(165, 0, 0, 0.87)" }}
                >
                  <Link to={`/item/${product.id}`}>
                    <strong>Ver mas</strong>
                  </Link>
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </>
  );
};
