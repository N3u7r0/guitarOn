import { useContext, useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Stack,
  RadioGroup,
  Radio,
  Button,
  Input,
} from "@chakra-ui/react"
import { useDataUser, useCheckLoginUser } from "../hooks";
import { TableProducts, Spin } from "../components";
import { CartContext, ToastContext } from "../context";
import { db } from "../firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


export const CheckOut = () => {
  const { userCheck } = useCheckLoginUser();
  const { setErrorContext, setExitoContext } = useContext(ToastContext);
  const { stateCartWidget, setStateCartWidget, totalPrice } = useContext(CartContext);// productos y saldo total
  const { userDataContext, loading } = useDataUser(); // datos de usuario

  const navigate = useNavigate();
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
      // guardar el pedido en el usuario
      const userId = userCheck.uid;
      const userPedidosRef = doc(db, `users/${userId}/misPedidos`, docRef.id);
      await setDoc(userPedidosRef, pedido);
      setExitoContext(`Pedido guardado exitosamente, muchas gracias ${cliente.nombre || ""}!`);
      setStateCartWidget([]);//limpio el carrito
      navigate("/");
      setTimeout(() => {
        location.reload();
    }, 3000);
    } catch (error) {
      console.error("Error al guardar el pedido: ", error);
      setErrorContext("Error al guardar el pedido");
    }
  };


  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <Flex justifyContent={"center"} flexDirection={"column"} margin={"2rem"} p={5}>
          {/* tabla de productos */}
          <TableProducts productos={stateCartWidget} precioTotal={totalPrice} />
          <RadioGroup
            mt={4}
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            onChange={(value) => setOpcionEnvio(value)}
            value={opcionEnvio}
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
        </Flex>
      )}
    </>
  );
};
