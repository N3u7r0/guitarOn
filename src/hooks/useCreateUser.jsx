import { useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { ToastContext } from "../context";

export const useCreateUser = () => {
  const { setErrorContext, setExitoContext } = useContext(ToastContext);
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
  async function SignUp() {

    const { nombre, apellido, telefono, direccion, email, password } = formValues;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;
      setExitoContext(`Usuario creado exitosamente. Bienvenido ${nombre + " " + apellido}`)
      await setDoc(doc(db, "users", userId), {
        nombre,
        apellido,
        telefono,
        direccion,
        email,
      });


    } catch (err) {
      setErrorContext(err.code);
    }
  }

  return {
    SignUp,
    handleInputChange,
    formValues,
  };
};