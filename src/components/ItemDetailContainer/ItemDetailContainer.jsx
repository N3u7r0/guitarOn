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
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context";

export const ItemDetailContainer = ({ product, loading }) => {
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
    <Flex justifyContent={"center"} alignContent={"center"}>
      <Card
        key={product.id}
        justifyContent={"center"}
        w={"100vh"}
        marginTop={"14rem"}
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        backgroundColor={"rgba(0, 0, 0, 0.05)"}
        _hover={{ backgroundColor: "rgba(80, 0, 0, 0.12)" }}
        boxShadow={"0px 2px 10px rgba(255, 15, 15, 0.25)"}
      >
        <Image
          src={imgDefault}
          alt={product.marca + " " + product.modelo}
          objectFit="cover"
          maxW={{ base: "100%", sm: "350px" }}
          margin={"0.5rem"}
        />

        <Stack>
          <CardBody margin={"0.5rem"} padding={"0px"}>
            <Heading size="lg">{product.marca}</Heading>
            <Heading size="xl">{product.modelo}</Heading>
            <Heading size="m">Color : {product.color}</Heading>
            <Text py="2">{product.descripcion_completa}</Text>

            <Flex justifyContent={"center"} margin={"1rem"}>
              <Button
                variant="solid"
                color="white"
                backgroundColor={"rgba(165, 15, 15, 0.87)"}
                _hover={{ backgroundColor: "rgba(255, 15, 15, 0.87)" }}
                onClick={handleDecrement}
              >
                -
              </Button>
              <Text
                alignContent={"center"}
                fontSize={"x-large"}
                margin={"0rem 0.5rem 0rem 0.5rem"}
              >
                {count}
              </Text>
              <Button
                variant="solid"
                color="white"
                backgroundColor={"rgba(165, 15, 15, 0.87)"}
                _hover={{ backgroundColor: "rgba(255, 15, 15, 0.87)" }}
                onClick={handleIncrement}
              >
                +
              </Button>
            </Flex>
            <Text textAlign={"center"}>cantidad : {count}</Text>
          </CardBody>

          <CardFooter
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            gap={"1vh"}
          >
            {showButton && (
              <>
                <Button
                  variant="solid"
                  color="white"
                  backgroundColor={"rgba(165, 15, 15, 0.87)"}
                  _hover={{ backgroundColor: "rgba(255, 15, 15, 0.87)" }}
                  onClick={() => {
                    addItem(), setCount(0);
                  }}
                >
                  Agregar al carrito
                </Button>
                <Button
                  variant="solid"
                  color="white"
                  backgroundColor={"rgba(65, 15, 15, 0.87)"}
                  _hover={{ backgroundColor: "rgba(255, 115, 15, 0.87)" }}
                  onClick={(count) => setCount(0)}
                >
                  Cancelar
                </Button>
              </>
            )}
          </CardFooter>
        </Stack>
      </Card>
    </Flex>
  );
};
