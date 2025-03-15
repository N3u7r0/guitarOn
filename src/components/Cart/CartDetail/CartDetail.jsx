import { useContext, useEffect } from "react";
import { CartContext } from "../../../context";
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Divider,
  VStack,
  HStack,
  Spacer,
  Alert,
  AlertIcon,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const CartDetail = () => {
  const {
    stateCartWidget,
    addItem,
    removeItem,
    deleteItem,
    totalPrice,
    setTotalPrice,
  } = useContext(CartContext);

  // actualiza el totalPrice cuando el carrito cambia
  useEffect(() => {
    const newTotal = stateCartWidget.reduce(
      (acc, item) => acc + (item.precio ? item.precio * item.count : 0),
      0
    );
    setTotalPrice(newTotal); // actualiza el estado global del total
  }, [stateCartWidget, setTotalPrice]);

  const handleDeleteItem = (item) => {
    deleteItem(item);
  };

  return (
    <Box p={6} maxW="800px" mx="auto">
      <Heading as="h2" size="lg" mb={6} textAlign="center">
        Detalles del Carrito
      </Heading>

      {stateCartWidget.length === 0 ? (
        <Alert
          status="info"
          borderRadius="md"
          backgroundColor={"rgba(0, 0, 0, 0.05)"}
          _hover={{ backgroundColor: "rgba(80, 000, 000, 0.12)" }}
          boxShadow={"1px 3px 5px rgba(0, 0, 0, 0.15) "}
        >
          <AlertIcon />
          Tu carrito está vacío.
        </Alert>
      ) : (
        <VStack spacing={4} align="stretch" mb={"5rem"}>
          {stateCartWidget.map((item) => (
            <Flex
              key={item.id}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              alignItems="center"
              boxShadow="sm"
              backgroundColor={"rgba(0, 0, 0, 0.05)"}
              _hover={{ backgroundColor: "rgba(80, 000, 000, 0.12)" }}
              flexDirection={{ base: "column", md: "row" }}
              textAlign={{ base: "center", md: "left" }}
            >
              <Image
                src={item.image}
                alt={item.modelo}
                boxSize="100px"
                objectFit="cover"
                borderRadius="md"
                mr={4}
              />
              <Box flex="1">
                <Text fontSize="xl" fontWeight="bold" color={"red.500"}>
                  {item.marca}
                </Text>
                <Text fontSize="l" fontWeight="bold">
                  {item.modelo}
                </Text>
                <HStack
                  spacing={4}
                  mt={2}
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <Text>
                    Precio: ${item.precio ? item.precio.toFixed(2) : "N/A"}
                  </Text>
                  <HStack>
                    <IconButton
                      aria-label="Disminuir cantidad"
                      icon={<MinusIcon />}
                      size="sm"
                      onClick={() => removeItem(item)}
                      isDisabled={item.count === 1}
                    />
                    <Text>{item.count}</Text>
                    <IconButton
                      aria-label="Aumentar cantidad"
                      icon={<AddIcon />}
                      size="sm"
                      onClick={() => addItem(item, 1)}
                      isDisabled={item.count >= item.stock}
                    />
                  </HStack>
                </HStack>
              </Box>
              <Spacer />
              <HStack>
                <Text fontWeight="bold">
                  Subtotal: $
                  {item.precio ? (item.precio * item.count).toFixed(2) : "N/A"}
                </Text>
                <IconButton
                  aria-label="Eliminar producto"
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  variant="outline"
                  onClick={() => handleDeleteItem(item)}
                />
              </HStack>
            </Flex>
          ))}
          <Divider />
          <Flex alignItems="center">
            <Text fontSize="2xl" fontWeight="bold" display={"flex"}>
              Total: $
            </Text>
            <Text fontSize="2xl" fontWeight="bold" color={"red.500"}>
              {totalPrice.toFixed(2)} 
            </Text>
            <Spacer />
            <Link to="/pagar">
              <Button
                _hover={{
                  backgroundColor: "rgba(200, 000, 000, 0.85)",
                  color: "white",
                }}
              >
                Continuar
              </Button>
            </Link>
          </Flex>
        </VStack>
      )}
    </Box>
  );
};
