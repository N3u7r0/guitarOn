import { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export const useCreateUser = (onSuccess) => {
  const [error, setError] = useState(null);

  // referencias para el formulario de registro
  const registerEmailRef = useRef();
  const registerPasswordRef = useRef();
  const nombreRef = useRef();
  const apellidoRef = useRef();
  const telefonoRef = useRef();
  const direccionRef = useRef();

  // funcion para manejar el registro
  async function SignUp(e) {
    e.preventDefault();
    const nombreUser = nombreRef.current.value;
    const apellidoUser = apellidoRef.current.value;
    const telefonoUser = telefonoRef.current.value;
    const direccionUser = direccionRef.current.value;
    const emailUser = registerEmailRef.current.value;
    const passwordUser = registerPasswordRef.current.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailUser,
        passwordUser
      );
      // guarda el uid para que coincida el id del usuario en firestore
      const userId = userCredential.user.uid;

      // Guarda estos datos en firestore
      await setDoc(doc(db, "users", userId), {
        nombre: nombreUser,
        apellido: apellidoUser,
        telefono: telefonoUser,
        direccion: direccionUser,
        email: emailUser,
      });

      console.info("Usuario creado exitosamente");

      // si todo sale bien, cierra el drawer
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
    registerEmailRef,
    registerPasswordRef,
    nombreRef,
    apellidoRef,
    telefonoRef,
    direccionRef,
  };
};
