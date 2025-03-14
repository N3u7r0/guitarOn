import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const useLoginUser = (onSuccess) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (emailUser, passwordUser) => {
    setLoading(true);
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailUser,
        passwordUser
      );

      console.log("Usuario logueado:", userCredential.user.email);

      if (onSuccess) {
        // cierra el drawer
        onSuccess();
      }
    } catch (err) {
      setError(err.code);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
