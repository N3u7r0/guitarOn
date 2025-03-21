import { useState, useContext, useEffect } from "react";
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
import { db } from "../../firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { CartContext } from "../../context";
import { Spin } from "../ui";
import { useCheckLoginUser } from "../../hooks"; // para el uid del usuario


export const CheckOut = ({ userDataContext, loading }) => {
  const { stateCartWidget, totalPrice } = useContext(CartContext);// productos y saldo total
  const { userCheck } = useCheckLoginUser();
  const [opcionEnvio, setOpcionEnvio] = useState("retiro en tienda");
  const [cliente, setCliente] = useState([{
    nombre: "",
    apellido: "",
    direccion: "",
    telefono: "",
  }]); //datos del cliente que llegan desde el formulario.

  // guardo los datos de datacontext en el formuario
  useEffect(() => {
    //control de error, tengo q verificar la existencia y verificar su logitud si voy a usar [0] xq si no falla!
    if (userDataContext && userDataContext.length > 0) {
      const userData = userDataContext[0]; // Acceder a los datos del primer array (xq llega como tal [{...}])
      setCliente({
        nombre: userData.nombre || "N/a",
        apellido: userData.apellido || "N/a",
        direccion: userData.direccion || "N/a",
        telefono: userData.telefono || "N/a",
      });
    }
  }, [userDataContext]);

  // escucha el formulario para guardarlo en el estado
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCliente((prev) => ({ ...prev, [name]: value }));
  };

  const handleGuardarPedido = async () => {
    const fecha = new Date(); // Fecha del pedido
    const pedido = {
      cliente,
      opcionEnvio,
      productos: stateCartWidget,
      total: totalPrice,
      fecha,
    };

    try {
      // guarda el pedido en la coleccion de todos los pedidos
      const docRef = await addDoc(collection(db, "pedidos"), pedido);
      console.log("Pedido guardado en 'pedidos' con ID:", docRef.id);
      // guardar el pedido en el usuario
      const userId = userCheck.uid;
      const userPedidosRef = doc(db, `users/${userId}/misPedidos`, docRef.id);
      await setDoc(userPedidosRef, pedido);
      console.log("Pedido guardado en 'users/misPedidos' para el usuario:", userId);
    } catch (error) {
      console.error("Error al guardar el pedido:", error);
    }
  };

  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <Flex justifyContent={"center"} flexDirection={"column"} margin={"2rem"} p={5}>
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

              <RadioGroup
                onChange={(value) => setOpcionEnvio(value)}
                value={opcionEnvio}
                mt={4}
              >
                <Stack direction="row" spacing={5}>
                  <Radio value="retiro en tienda">Retiro en tienda</Radio>
                  <Radio value="envio">Envío</Radio>
                </Stack>
              </RadioGroup>

              {opcionEnvio === "envio" && (
                <Box mt={4} borderWidth="1px" borderRadius="lg" p={4}>
                  <Text fontSize="lg" fontWeight="bold" mb={3}>
                    Datos de Envío
                  </Text>
                  <Stack spacing={3}>
                    <Text>Nombre</Text>
                    <Input
                      placeholder="Nombre"
                      name="nombre"
                      value={cliente.nombre}
                      onChange={handleInputChange}
                    />
                    <Text>Apellido</Text>
                    <Input
                      placeholder="Apellido"
                      name="apellido"
                      value={cliente.apellido}
                      onChange={handleInputChange}
                    />
                    <Text>Direccion</Text>
                    <Input
                      placeholder="Dirección"
                      name="direccion"
                      value={cliente.direccion}
                      onChange={handleInputChange}
                    />
                    <Text>Telefono</Text>
                    <Input
                      placeholder="Teléfono"
                      name="telefono"
                      value={cliente.telefono}
                      onChange={handleInputChange}
                    />
                  </Stack>
                </Box>
              )}
              <Button
                colorScheme="red"
                mt={4}
                onClick={handleGuardarPedido}
              >
                Guardar Pedido
              </Button>
            </Box>
          </Stack>
        </Flex>
      )}
    </>
  );
};
