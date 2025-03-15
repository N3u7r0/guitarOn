
import {
  Box,
  Flex,
  Text,
  Stack,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Divider,
} from "@chakra-ui/react";
import { CartContext } from "../../context";
import { Spin } from "../ui";

export const User = ({ userData, loading }) => {
  const { stateCartWidget } = useContext(CartContext);

  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <Flex
          m={"2rem"}
          gap={"2rem"}
          flexWrap={"wrap"}
          justifyContent={"center"}


        >
          {/* Datos de usuario */}
          <Stack spacing={4}>
            {userData.map((user, index) => (
              <Box
                key={index}
                borderWidth="1px"
                borderRadius="lg"
                boxShadow="md"
                p={4}
                bg="white"
              >
                <Text
                  color={"black"}
                  textAlign={"center"}
                  fontSize={"x-large"}
                >
                  Mis datos
                </Text>
                <Divider />
                <br />
                <Flex direction="column">
                  <Text fontWeight="bold" fontSize="lg" color={"black"}>
                    {user.nombre || "Nombre no disponible"}{" "}
                    {user.apellido || "Apellido no disponible"}
                  </Text>
                  <Text fontSize="md" color="gray.600">
                    Email: {user.email || "Email no disponible"}
                  </Text>
                  <Text fontSize="md" color="gray.600">
                    Teléfono: {user.telefono || "Teléfono no disponible"}
                  </Text>
                  <Text fontSize="md" color="gray.600">
                    Dirección: {user.direccion || "Dirección no disponible"}
                  </Text>
                </Flex>
              </Box>
            ))}
          </Stack>
          {/* Tabla de productos*/}
          
        </Flex>
      )}
    </>
  );
};
