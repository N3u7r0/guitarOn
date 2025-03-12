import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

export const ToastErr = ({ error }) => {
  const toast = useToast();

  useEffect(() => {
    if (error) {
      toast({
        title: "Error!",
        description: error,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  }, [error, toast]);

  return null; // esto es una alerta por ende no imprime ningun div
};

