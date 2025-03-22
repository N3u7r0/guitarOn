import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export const useCreateUser = (onSuccess) => {
  const [error, setError] = useState(null);
  const [formValues, setFormValues] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    direccion: "",
    email: "",
    password: "",
  });

  // funcion para manejar el cambio en el form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // funcion de registro
  async function SignUp(e) {
    e.preventDefault();
    const { nombre, apellido, telefono, direccion, email, password } = formValues;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;

      await setDoc(doc(db, "users", userId), {
        nombre,
        apellido,
        telefono,
        direccion,
        email,
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      setError(err.code);
    }
  }

  return {
    error,
    SignUp,
    handleInputChange,
    formValues,
  };
};