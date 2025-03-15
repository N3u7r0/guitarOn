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
import { CartContext } from "../context";

export const Pagar = () => {
  const { stateCartWidget, totalPrice } = useContext(CartContext);

  return (
    <>
      <Flex justifyContent={"center"} margin={"2rem"} p={5}>
        <Stack display={"flex"} align={"center"}>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            p={4}
            w={{ base: "45vh", md: "90vh", lg: "100vh" }}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <Text textAlign={"center"} fontSize={"x-large"}>
              Mis productos
            </Text>
            <Divider />

            <br />

            <TableContainer overflowY="auto" maxH={"45vh"}>
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
            {/* Total */}
            <Divider mt={4} />
            <Flex justifyContent={"space-between"} mt={4}>
              <Text fontSize={"lg"} fontWeight="bold">
                Total:
              </Text>
              <Text fontSize={"lg"} fontWeight="bold" color={"red.500"}>
                ${totalPrice.toFixed(2)}
              </Text>
            </Flex>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};
