import { useState, useContext } from "react";
import { UserContext } from "../context"
import { signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export const useLoginUser = (onSuccess) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { userDataContext, setUserDataContext } = useContext(UserContext);

  const login = async (emailUser, passwordUser) => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailUser,
        passwordUser
      );
      const userId = userCredential.user.uid;
      const userDocRef = doc(db, "users", userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        setUserDataContext((prevData) => [...prevData, userDoc.data()]);
      } else {
        console.warn("No se encontró información para el usuario:", userId);
      }

      alert("Inicio de sesión exitoso para: " + userCredential.user.email);

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      setError(err.message);
      console.error(err)
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, userDataContext };
};
