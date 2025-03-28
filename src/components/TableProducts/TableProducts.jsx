import {
  Box,
  Flex,
  Text,
  Divider,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
} from "@chakra-ui/react";

export const TableProducts = ({ productos, precioTotal }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      p={4}
      justifyContent="center"
      alignContent="center"
    >
      <Text textAlign="center" fontSize="x-large">
        Mis productos
      </Text>
      <Divider />
      <br />
      {productos.length === 0 ? (
        <Text textAlign="center" fontSize="lg" color="gray.500">
          No hay productos disponibles.
        </Text>
      ) : (
        <TableContainer overflowY="auto" maxH="45vh">
          <Table variant="striped" colorScheme="red">
            <Thead>
              <Tr>
                <Th>Categoria</Th>
                <Th>Marca</Th>
                <Th>Modelo</Th>
                <Th>Precio unidad</Th>
                <Th>Cantidad</Th>
              </Tr>
            </Thead>
            <Tbody>
              {productos.map((item) => (
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
      )}
      <Divider mt={4} />
      <Flex justifyContent="space-between" mt={4}>
        <Text fontSize="lg" fontWeight="bold">
          Total:
        </Text>
        <Text fontSize="lg" fontWeight="bold" color="red.500">
          ${precioTotal.toFixed(2)||""}
        </Text>
      </Flex>
    </Box>
  );
};