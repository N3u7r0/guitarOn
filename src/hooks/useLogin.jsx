import { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth } from "../firebase";
import { db } from "../firebase";
import { UserContext } from "../context";

export const useLogin = (onSuccess) => {
  const [loading, setLoading] = useState(false); // loading para q el btn diga cargando !
  const [error, setError] = useState(null); // estado de error para las tostadas
  const { userDataContext, setUserDataContext } = useContext(UserContext);

  console.log(userDataContext);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      // Inicia sesión con Firebase Auth
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userId = userCredential.user.uid;

      console.info(
        "Inicio de sesión exitoso para: ",
        userCredential.user.email
      );

      // consulta los datos del usuario en firestore
      const userDocRef = doc(db, "users", userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        // Agregar los datos al array existente en el contexto (si no los sumo con el operator, me modifica el array del contexto a un objeto directamente)
        setUserDataContext((prevData) => [...prevData, userDoc.data()]);
      } else {
        console.warn("No se encontró información para el usuario:", userId);
      }

      alert("Inicio de sesión exitoso para: " + userCredential.user.email);

      // Llama a la funcion para cerrar el drawer
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, userDataContext };
};
