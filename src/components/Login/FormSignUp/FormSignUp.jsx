import { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export const FormSignUp = ({ onSuccess }) => {
  // Referencias para el formulario de registro
  const registerEmailRef = useRef();
  const registerPasswordRef = useRef();
  const nombreRef = useRef();
  const apellidoRef = useRef();
  const telefonoRef = useRef();
  const direccionRef = useRef();

  // Manejo del registro
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
      //guarda el uid para q coincida el id de el user de firestore
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
        alert("Usuario creado exitosamente");
        onSuccess();
      }
    } catch (error) {
      alert("Error al registrar el usuario: " + error.message);
    }
  }

  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
          <h4>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Crear una cuenta
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h4>
          <AccordionPanel pb={4}>
            <form onSubmit={SignUp}>
              <VStack spacing={4}>
                <FormControl id="nombre" isRequired>
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    type="text"
                    placeholder="Ingresa tu nombre"
                    required
                    maxLength="30"
                    ref={nombreRef}
                    autoComplete="name"
                  />
                </FormControl>
                <FormControl id="apellido" isRequired>
                  <FormLabel>Apellido</FormLabel>
                  <Input
                    type="text"
                    required
                    maxLength="30"
                    placeholder="Ingresa tu apellido"
                    ref={apellidoRef}
                    autoComplete="family-name"
                  />
                </FormControl>
                <FormControl id="telefono" type="number" isRequired>
                  <FormLabel>Teléfono</FormLabel>
                  <Input
                    type="number"
                    placeholder="Ingresa tu número de teléfono"
                    ref={telefonoRef}
                    autoComplete="phone"
                  />
                </FormControl>
                <FormControl id="direccion" isRequired>
                  <FormLabel>Dirección</FormLabel>
                  <Input
                    type="text"
                    required
                    maxLength="30"
                    placeholder="Ingresa tu dirección"
                    ref={direccionRef}
                    autoComplete="street-address"
                    
                  />
                </FormControl>
                <FormControl id="registerEmail" isRequired>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <Input
                    type="email"
                    placeholder="Ingresa tu correo"
                    ref={registerEmailRef}
                     autoComplete="email"
                  />
                </FormControl>
                <FormControl id="registerPassword" isRequired>
                  <FormLabel>Contraseña (minimo 6 caracteres)</FormLabel>
                  <Input
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    ref={registerPasswordRef}
                     autoComplete="new-password"
                  />
                </FormControl>
                <Button
                  type="submit"
                  bgColor="red.800"
                  color="whitesmoke"
                  width="full"
                  _hover={{ backgroundColor: "rgba(200, 0, 0, 0.85)" }}
                >
                  Registrar
                </Button>
              </VStack>
            </form>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
