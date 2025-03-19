import { useState, useContext } from "react";
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
  RadioGroup,
  Radio,
  Button,
  Input,
} from "@chakra-ui/react";
import { CartContext } from "../../context";
import { Spin } from "../ui";

export const CheckOut = ({ userDataContext, loading }) => {
  const { stateCartWidget, totalPrice } = useContext(CartContext);
  const [opcionEnvio, setOpcionEnvio] = useState("retiro");
  const [envio, setEnvio] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    telefono: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEnvio((prev) => ({ ...prev, [name]: value }));
  };

  console.log(userDataContext);

  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <Flex justifyContent={"center"} flexDirection={"column"} margin={"2rem"} p={5}>
          {/* Mis productos */}
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
              <Divider mt={4} />
              <Flex justifyContent={"space-between"} mt={4}>
                <Text fontSize={"lg"} fontWeight="bold">
                  Total:
                </Text>
                <Text fontSize={"lg"} fontWeight="bold" color={"red.500"}>
                  ${totalPrice.toFixed(2)}
                </Text>
              </Flex>
              <Divider mt={4} />

              {/* Opción de envío o retiro */}
              <RadioGroup
                onChange={(value) => setOpcionEnvio(value)}
                value={opcionEnvio}
                mt={4}
              >
                <Stack direction="row" spacing={5}>
                  <Radio value="retiro">Retiro en tienda</Radio>
                  <Radio value="envio">Envío</Radio>
                </Stack>
              </RadioGroup>

              {/* Datos de envío */}
              {opcionEnvio === "envio" && (
                <Box mt={4} borderWidth="1px" borderRadius="lg" p={4}>
                  <Text fontSize="lg" fontWeight="bold" mb={3}>
                    Datos de Envío
                  </Text>
                  <Stack spacing={3}>
                    <Input
                      placeholder="Nombre"
                      name="nombre"
                      value={envio.nombre}
                      onChange={handleInputChange}
                    />
                    <Input
                      placeholder="Apellido"
                      name="apellido"
                      value={envio.apellido}
                      onChange={handleInputChange}
                    />
                    <Input
                      placeholder="Dirección"
                      name="direccion"
                      value={envio.direccion}
                      onChange={handleInputChange}
                    />
                    <Input
                      placeholder="Teléfono"
                      name="telefono"
                      value={envio.telefono}
                      onChange={handleInputChange}
                    />
                    <Button colorScheme="red" onClick={() => console.log(envio)}>
                      Guardar
                    </Button>
                  </Stack>
                </Box>
              )}
            </Box>
          </Stack>
        </Flex>
      )}
    </>
  );
};
