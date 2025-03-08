import { useRef } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Box,
} from "@chakra-ui/react";

export const FormSignIn = ({ onSuccess }) => {
  // Referencias para el formulario de login
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();

  // Manejo del login (escucha el formulario)
  async function Login(e) {
    e.preventDefault();
    const emailUser = loginEmailRef.current.value;
    const passwordUser = loginPasswordRef.current.value;

    try {
      // inicia sesion con Firebase
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailUser,
        passwordUser
      );

      console.info("Inicio de sesión exitoso para:", userCredential.user.email);

      // llama a la funcion onSuccess para cerrar el drawer
      if (onSuccess) {
        
        onSuccess();
      }
    } catch (error) {
      alert("Error al iniciar sesión:  " + error.message);
    }
  }

  return (
    <>
      <Box p={4}>
        <form onSubmit={Login}>
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
              <FormLabel>Contraseña (minimo 6 caracteres)</FormLabel>
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
    </>
  );
};
