import { useEffect,useContext } from "react";
import { useToast } from "@chakra-ui/react";
import { ToastContext } from "../../../context";

export const ToastError = () => {
  const toast = useToast();
  const { errorContext, exitoContext,setErrorContext, setExitoContext} = useContext(ToastContext);

  useEffect(() => {

    if (errorContext) {
      let msj;

      switch (errorContext) {
        case "auth/invalid-credential":
        case "auth/missing-password":
          msj = "Usuario o contraseña incorrecto.";
          break;
        case "auth/email-already-in-use":
          msj = "El email ya está en uso.";
          break;
        case "auth/weak-password":
          msj = "La contraseña necesita 6 caracteres o más.";
          break;
        default:
          msj = `Error, contacte con servicio técnico. (${errorContext})`;
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
    if (exitoContext) {
      toast({
        title: "exito!",
        description: exitoContext,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }

  // limpia los estados, para q no reaparezca el msjs.
    setErrorContext(null)
    setExitoContext(null)
  }, [errorContext, exitoContext]);

  return null; // El componente no renderiza nada visualmente xq eso va null (buena practica)

};