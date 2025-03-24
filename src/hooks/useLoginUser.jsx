import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { ToastContext } from "../context/toastContext";
import { useContext } from "react";

export const useLoginUser = () => {
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { setErrorContext, setExitoContext } = useContext(ToastContext);


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
    setErrorContext(null);

    try {
      const { email, password } = credentials;
      await signInWithEmailAndPassword(auth, email, password);
      setExitoContext("Usuario logeado exitosamente.")

    } catch (err) {
      setErrorContext(err.code);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, handleInputChange, credentials, };
};