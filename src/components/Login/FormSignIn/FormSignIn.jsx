import { useRef } from "react";
import { useLogin } from "../../../hooks";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Box,
} from "@chakra-ui/react";

export const FormSignIn = ({ onSuccess }) => {
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  const { login, loading, error } = useLogin(onSuccess);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailUser = loginEmailRef.current.value;
    const passwordUser = loginPasswordRef.current.value;
    login(emailUser, passwordUser); // llama a la funcion del custom hook
  };

  return (
    <>
      <Box p={4}>
        <form onSubmit={handleSubmit}>
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
              <FormLabel>Contraseña (mínimo 6 caracteres)</FormLabel>
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
              isDisabled={loading}
              _hover={{ backgroundColor: "rgba(200, 0, 0, 0.85)" }}
            >
              {loading ? "Cargando..." : "Iniciar Sesión"}
            </Button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </VStack>
        </form>
      </Box>
    </>
  );
};
