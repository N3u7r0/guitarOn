import {
  Card,
  CardBody,
  Button,
  Image,
  Stack,
  Heading,
  Text,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import { Spin } from "../../../components";
import { CartContext } from "../../../context";
import imgDefault from "../../../assets/images/imgDefault.jpg";

export const ItemDetailContainer = ({ product, loading }) => {
  // Lógica de los botones que conectan con el carrito.
  const [count, setCount] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    setShowButton(count > 0);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return loading ? (
    <Spin />
  ) : (
    <Flex
      justifyContent="center"
      alignItems="center"
      minH="91vh"
      minW="100%" // para q no se rompa en la transicion de row a column
    >
      <Card
        key={product.id}
        justifyContent="center"
        w={{ base: "95%", md: "90%", lg: "75%" }}
        overflow="hidden"
        margin="1rem"
        boxShadow={"0px 0px 40px -15px rgb(180, 15, 15, 1)"}
        transition="0.5s"
        _hover={{
          boxShadow: "0px 0px 50px -13px rgb(200, 0, 0, 1)",
          transition: "0.2s"
        }}
      >
        <Flex
          direction={{ base: "column", sm: "column", lg: "row" }}
          alignContent="center"
          alignItems={"center"}

          backgroundColor={"rgba(0, 0, 0, 0.85)"}
          transition="0.5s"
          _hover={{
            backgroundColor: "rgba(10, 0, 0, 0.95)",
            transition: "0.2s"
          }}
        >
          <Image
            src={product.image || imgDefault}
            alt={`${product.marca} ${product.modelo}`}
            objectFit="cover"
            maxW={{ base: "95%", sm: "25rem", lg: "27rem" }}
            margin="1rem"
            borderRadius={4}
          />

          <Stack>
            <CardBody
              display={"flex"}
              flexDir={"column"}
              color="whitesmoke"// color de la fuente

              
              margin="1rem"
            >
              <Heading size="lg" m="0.2rem" textAlign="center">{product.marca}</Heading>
              <Divider />
              <Heading size="xl">{product.modelo}</Heading>
              <Heading size="m" color="gray">
                Color: {product.color}
              </Heading>
              <Text py="1rem" w="90%" textAlign="left" m="auto">
                {product.descripcion_completa}
              </Text>

              <Flex justifyContent="center" margin="1rem" >
                <Button
                  color="white"
                  backgroundColor="rgba(165, 15, 15, 0.87)"
                  _hover={{ backgroundColor: "rgba(255, 15, 15, 0.87)" }}
                  onClick={handleDecrement}
                >
                  -
                </Button>
                <Text
                  alignContent="center"
                  fontSize="x-large"
                  margin="0rem 0.6rem"

                >
                  {count}
                </Text>
                <Button
                  color="white"
                  backgroundColor={"rgba(165, 15, 15, 0.87)"}
                  _hover={{ backgroundColor: "rgba(255, 15, 15, 0.87)" }}
                  onClick={handleIncrement}
                >
                  +
                </Button>
              </Flex>
              {count === 0 ? (<Text display="none"></Text>) : (<Text textAlign="center" m="0.5rem">Cantidad: {count}</Text>)}
              {/* botonera agregar carrito */}
              {showButton && (
                <Flex
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  gap="1rem"
                >
                  <Button

                    color="white"
                    backgroundColor="rgba(165, 15, 15, 0.87)"
                    _hover={{ backgroundColor: "rgba(255, 15, 15, 0.87)" }}
                    onClick={() => {
                      addItem(product, count);
                      setCount(0);
                    }}
                  >
                    Agregar al carrito
                  </Button>
                  <Button
                    color="white"
                    backgroundColor="rgba(65, 15, 15, 0.87)"
                    _hover={{ backgroundColor: "rgba(255, 115, 15, 0.87)" }}
                    onClick={() => setCount(0)}
                  >
                    Cancelar
                  </Button>
                </Flex>
              )}
            </CardBody>

          </Stack>
        </Flex>
      </Card>
    </Flex>
  );
};
