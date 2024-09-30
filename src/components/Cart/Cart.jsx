import { useContext } from "react";
import { CartContext } from "../../context";
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

export const Cart = () => {
  const { stateCartWidget, addItem, removeItem, deleteItem } =
    useContext(CartContext);
  const total = stateCartWidget.reduce(
    (acc, item) => acc + item.precio * item.count,
    0
  );

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
        <VStack spacing={4} align="stretch">
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
                <HStack spacing={4} mt={2}>
                  <Text>Precio: ${item.precio.toFixed(2)}</Text>
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
                      onClick={() => addItem(item)}
                      isDisabled={item.count >= item.stock}
                    />
                  </HStack>
                </HStack>
              </Box>
              <Spacer />
              <HStack>
                <Text fontWeight="bold">
                  Subtotal: ${(item.precio * item.count).toFixed(2)}
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
              {total.toFixed(2)}
            </Text>
            <Spacer />
            <Link to="/pagar">
              <Button
                _hover={{
                  backgroundColor: "rgba(200, 000, 000, 0.85)",
                  color: "white",
                }}
              >
                Continuar al pago
              </Button>
            </Link>
          </Flex>
        </VStack>
      )}
    </Box>
  );
};
