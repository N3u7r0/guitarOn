import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth } from "../firebase";
import { db } from "../firebase"; 
export const useLogin = (onSuccess) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null); // Estado para los datos del usuario

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      // Inicia sesión con Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;

      console.info("Inicio de sesión exitoso para:", userCredential.user.email);

      // Consulta los datos del usuario en Firestore
      const userDocRef = doc(db, "users", userId); // Asumiendo que la colección se llama "users"
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
      alert("Error al iniciar sesión: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, userData };
};
