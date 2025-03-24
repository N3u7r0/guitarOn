import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Box,
} from "@chakra-ui/react";
import { useLoginUser } from "../../../hooks";
import { ToastError } from "../../ui/ToastError/ToastError";

export const FormSignIn = ({ onSuccess }) => {
  const { login, loading, error, handleInputChange, credentials, exito } = useLoginUser(onSuccess);


  return (
    <>
      <Box p={4}>
        <form onSubmit={(e) => { e.preventDefault(); login(); }}>

          <VStack spacing={4}>
            <FormControl id="loginEmail" isRequired>
              <FormLabel>Correo Electrónico</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Ingresa tu correo"
                value={credentials.email}
                onChange={handleInputChange}
                autoComplete="email"
              />
            </FormControl>
            <FormControl id="loginPassword" isRequired>
              <FormLabel>Contraseña (mínimo 6 caracteres)</FormLabel>
              <Input
                type="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                value={credentials.password}
                onChange={handleInputChange}
                autoComplete="current-password"
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
          </VStack>
        </form>
      </Box>
      {/* <ToastError error={error} exito={exito} /> */}
    </>
  );
};