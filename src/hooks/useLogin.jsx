import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth } from "../firebase";
import { db } from "../firebase";

export const useLogin = (onSuccess) => {
  const [loading, setLoading] = useState(false); // loading para q el btn diga cargando !
  const [error, setError] = useState(null); //estado de error para las tostadas
  const [userData, setUserData] = useState([]);
  console.log(userData);
  
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      // inicia sesion con firebase auth
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userId = userCredential.user.uid;

      console.info("Inicio de sesión exitoso para:", userCredential.user.email);

      // consulta los datos del usuario en firestore
      const userDocRef = doc(db, "users", userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        setUserData(userDoc.data());
        console.info("Datos del usuario:", userDoc.data());
      } else {
        console.warn("No se encontró información para el usuario:", userId);
      }

      alert("Inicio de sesión exitoso para: " + userCredential.user.email);

      // llama a la funcion para cerrar el drawer
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, userData };
};
