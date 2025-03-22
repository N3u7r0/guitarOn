import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useToast } from "@chakra-ui/react";

export const useLoginUser = (onSuccess) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const toast = useToast();

  // maneja los cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // funcion de inicio
  const login = async () => {
    setLoading(true);
    setError(null);

    try {
      const { email, password } = credentials;
      await signInWithEmailAndPassword(auth, email, password);

      if (onSuccess) {
        onSuccess();
      }

      toast({
        title: "¡Éxito!",
        description: "Sesión iniciada correctamente.",
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

  return { login, loading, error, handleInputChange, credentials };
};