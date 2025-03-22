import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

export const Toast = ({ error }) => {
  const toast = useToast(); // tostada de Chakra UI
 
 
  useEffect(() => {

    // loggica de error
    if (error) {
      let msj;
      if (error === "auth/invalid-credential") {
        msj = "Usuario o contraseña incorrecto.";
      } else if (error === "auth/email-already-in-use") {
        msj = "El email ya está en uso.";
      } else if (error === "auth/weak-password") {
        msj = "La contraseña necesita 6 caracteres o más.";
      } else {
        msj = `Error, contacte con servicio técnico. (${error})`;
      }

      toast({
        title: "Error!",
        description: msj,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  }, [error, toast]);
};