
import { useContext } from "react";
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

          {/* Tabla de productos con scroll horizontal */}
          <Stack
            display={"flex"} align={"center"}>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="md"
              p={4}
              w={{ base: "65%", md: "90%", lg: "100%" }}
              justifyContent={"center"}
              alignContent={"center"}
            >
              <Text
                textAlign={"center"}

                fontSize={"x-large"}
              >
                Mis productos
              </Text>
              <Divider />

              <br />
              {/* Tabla responsiva con scroll horizontal */}
              <TableContainer overflowY="auto" maxH={"45vh"}  >
                <Table
                  variant="striped"
                  colorScheme="red"
                  size={{ base: "sm", md: "md" }} // Tamaño ajustado por media queries
                >
                  {/* Encabezados de la tabla */}
                  <Thead>
                    <Tr>
                      <Th>Categoria</Th>
                      <Th>Marca</Th>
                      <Th>Modelo</Th>
                      <Th>Precio unidad</Th>
                      <Th>Cantidad</Th>
                    </Tr>
                  </Thead>
                  {/* Filas con los datos */}
                  <Tbody>
                    {stateCartWidget.map((item) => (
                      <Tr key={item.id}>
                        <Td>{item.categoria}</Td>
                        <Td>{item.marca}</Td>
                        <Td>{item.modelo}</Td>
                        <Td>${item.precio}</Td>
                        <Td>{item.count}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Stack>
        </Flex>
      )}
    </>
  );
};
