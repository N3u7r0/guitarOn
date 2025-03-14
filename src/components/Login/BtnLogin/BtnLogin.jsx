import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { FormSignUp } from "../FormSignUp/FormSignUp";
import { FormSignIn } from "../FormSignIn/FormSignIn";

export function BtnLogin() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSuccess = () => {
    onClose(); // cierra el Drawer
  };

  return (
    <>
      {/* Botón para abrir el Drawer */}
      <Button onClick={onOpen}
        _hover={{
          backgroundColor: "rgba(200, 0, 0, 0.85)",
          color: "white",
        }}>Login</Button>

      {/* Drawer principal */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign="center">Iniciar Sesión</DrawerHeader>
          <DrawerBody>
            {/* form de iniciar sesión (le paso la prop para que cierre)*/}
            <FormSignIn handleSuccess={handleSuccess} />

            <Box textAlign="center" mt={"5rem"} mb={4}>
              <p>¿No tenés una cuenta? Crea una!</p>
            </Box>

            {/*  formulario crear una cuenta */}
            <FormSignUp handleSuccess={handleSuccess} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
