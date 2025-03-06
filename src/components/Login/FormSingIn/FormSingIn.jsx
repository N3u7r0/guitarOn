import { useRef } from "react";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

export const FormSingIn = () => {
  const {onClose } = useDisclosure();

  // Referencias para el formulario de login
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();

  // Manejo del login
  async function handleLogin(e) {
    e.preventDefault();
    const emailUser = loginEmailRef.current.value;
    const passwordUser = loginPasswordRef.current.value;

    try {
      console.log("Iniciando sesión con:", emailUser, passwordUser);
      // Aquí podrías manejar tu lógica de autenticación con Firebase para login (si está configurada)
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }

    onClose();
  }
  return <>
  <Box p={4}>
              <form onSubmit={handleLogin}>
                <VStack spacing={4}>
                  <FormControl id="loginEmail" isRequired>
                    <FormLabel>Correo Electrónico</FormLabel>
                    <Input
                      type="email"
                      placeholder="Ingresa tu correo"
                      ref={loginEmailRef}
                    />
                  </FormControl>
                  <FormControl id="loginPassword" isRequired>
                    <FormLabel>Contraseña</FormLabel>
                    <Input
                      type="password"
                      placeholder="Ingresa tu contraseña"
                      ref={loginPasswordRef}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    bgColor="red.800"
                    color="whitesmoke"
                    width="full"
                    _hover={{ backgroundColor: "rgba(200, 0, 0, 0.85)" }}
                  >
                    Iniciar Sesión
                  </Button>
                </VStack>
              </form>
            </Box>
  </>;
};
