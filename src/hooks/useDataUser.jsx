import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const useDataUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    setLoading(true);

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          await fetchUserData(user.uid); // llama y espera a fetchUserData con el id del usuario
        } catch (err) {
          console.error("Error al obtener datos del usuario:", err);
        } finally {
          setLoading(false);
        }
      } else {
        console.warn("No hay usuario autenticado.");
        setUserData([]); // limpia el estado de userData cuando no hay autenticacion
        navigate("/");
      }
    });

    // limpia el listener al desmontar el componente
    return unsubscribe;
  }, []);

  // obtengo los datos del usuario de firestore
  const fetchUserData = async (uid) => {
    try {
      const userDocRef = doc(db, "users", uid);
      const userDoc = await getDoc(userDocRef);

      // obtengo los datos del documento, si no hay datos guardados, regresa al home
      if (userDoc.exists()) {
        const data = userDoc.data();
        setUserData((prevData) => [...prevData, data]);
      } else {
        console.warn("No se encontró información para el usuario con UID:", uid);
        navigate("/");
      }
    } catch (err) {
      setError(err.code);
      console.error("Error al obtener los datos del usuario:", err);
    }
  };

  return { userData, loading, error };
};
