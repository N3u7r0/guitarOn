import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useToast } from "@chakra-ui/react";

export const useLoginUser = (onSuccess) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const toast = useToast(); // tostada de Chakra U

  //espera el password y la cuenta q se usa dentro de login, la funcio signInWithEmailAndPassword de firebase 
  const login = async (emailUser, passwordUser) => {
    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(
        auth,
        emailUser,
        passwordUser
      );

      // cierra el drawer
      if (onSuccess) {
        onSuccess();
      }

      toast({
        title: "¡Éxito!",
        description: "Sesion iniciada correctamente.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });


    } catch (err) {
      setError(err.code);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
