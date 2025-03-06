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
import { FormSingUp } from "../FormSingUp/FormSingUp";
import { FormSingIn } from "../FormSingIn/FormSingIn";

export function BtnLogin() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Botón para abrir el Drawer */}
      <Button onClick={onOpen}>Login</Button>

      {/* Drawer principal */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign="center">Iniciar Sesión</DrawerHeader>
          <DrawerBody>
            {/* Form de iniciar sesión */}
            <FormSingIn />

            <Box textAlign="center" mt={"5rem"} mb={4}>
              <p>¿No tenés una cuenta? Crea una!</p>
            </Box>

            {/*  formulario crear una cuenta */}
            <FormSingUp />
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
