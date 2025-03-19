import { useState, useEffect, useContext } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const useDataUser = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { userDataContext, setUserDataContext } = useContext(UserContext);

  useEffect(() => {
    setLoading(true);

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          if (userDataContext.length === 0) { // Solo llama a fetchUserData si el contexto está vacío
            await fetchUserData(user.uid);
          }
        } catch (err) {
          console.error("Error al obtener datos del usuario:", err);
        } finally {
          setLoading(false);
        }
      } else {
        console.warn("No hay usuario autenticado.");
        setUserDataContext([]); // Limpia el estado de userDataContext al salir de la sesión
        navigate("/");
      }
    });

    // Limpia el listener al desmontar el componente
    return unsubscribe;
  }, [userDataContext]);

  // Obtengo los datos del usuario de Firestore
  const fetchUserData = async (uid) => {
    try {
      const userDocRef = doc(db, "users", uid);
      const userDoc = await getDoc(userDocRef);

      // Verifica si el documento existe
      if (userDoc.exists()) {
        const data = userDoc.data();
        setUserDataContext([data]); // Sobrescribe el estado con los nuevos datos
      } else {
        console.warn("No se encontró información para el usuario con UID:", uid);
        navigate("/");
      }
    } catch (err) {
      setError(err.code);
      console.error("Error al obtener los datos del usuario:", err);
    }
  };

  return { userDataContext, loading, error };
};
