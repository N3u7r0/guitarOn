import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

export function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Maneja el estado del Drawer internamente

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Iniciando sesión...");
    onClose(); // Cierra el Drawer después de iniciar sesión
  };

  return (
    <>
      {/* Botón para abrir el Drawer */}
      <Button onClick={onOpen}>Login</Button>

      {/* Drawer de Login */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Iniciar Sesión</DrawerHeader>
          <DrawerBody>
            <Box p={4}>
              <form onSubmit={handleLogin}>
                <VStack spacing={4}>
                  <FormControl id="email" isRequired>
                    <FormLabel>Correo Electrónico</FormLabel>
                    <Input type="email" placeholder="Ingresa tu correo" />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Contraseña</FormLabel>
                    <Input
                      type="password"
                      placeholder="Ingresa tu contraseña"
                    />
                  </FormControl>
                  <Button type="submit" colorScheme="blue" width="full">
                    Iniciar Sesión
                  </Button>
                </VStack>
              </form>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
