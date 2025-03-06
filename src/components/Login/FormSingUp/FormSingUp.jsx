import { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

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
  useDisclosure,
  Box,
} from "@chakra-ui/react";

export const FormSingUp = () => {
  const { onClose } = useDisclosure();

  // Referencias para el formulario de registro
  const registerEmailRef = useRef();
  const registerPasswordRef = useRef();
  const nombreRef = useRef();
  const apellidoRef = useRef();
  const telefonoRef = useRef();
  const direccionRef = useRef();

  // Manejo del registro
  async function handleSignUp(e) {
    e.preventDefault();
    const nombreUser = nombreRef.current.value;
    const apellidoUser = apellidoRef.current.value;
    const telefonoUser = telefonoRef.current.value;
    const direccionUser = direccionRef.current.value;
    const emailUser = registerEmailRef.current.value;
    const passwordUser = registerPasswordRef.current.value;

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        emailUser,
        passwordUser
      );
      console.log("Usuario creado:", userCredentials.user);

      // Manejo de datos adicionales
      console.log("Datos adicionales:", {
        nombre: nombreUser,
        apellido: apellidoUser,
        telefono: telefonoUser,
        direccion: direccionUser,
      });

      // Aquí puedes guardar los datos adicionales en Firestore u otro backend
    } catch (error) {
      console.error("Error al crear la cuenta:", error.message);
    }

    onClose();
  }

  return (
    <>
      {/*  formulario para crear cuenta */}
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
            {/* Formulario de registro */}
            <form onSubmit={handleSignUp}>
              <VStack spacing={4}>
                <FormControl id="nombre" isRequired>
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    type="text"
                    placeholder="Ingresa tu nombre"
                    ref={nombreRef}
                  />
                </FormControl>
                <FormControl id="apellido" isRequired>
                  <FormLabel>Apellido</FormLabel>
                  <Input
                    type="text"
                    placeholder="Ingresa tu apellido"
                    ref={apellidoRef}
                  />
                </FormControl>
                <FormControl id="telefono" isRequired>
                  <FormLabel>Teléfono</FormLabel>
                  <Input
                    type="tel"
                    placeholder="Ingresa tu número de teléfono"
                    ref={telefonoRef}
                  />
                </FormControl>
                <FormControl id="direccion" isRequired>
                  <FormLabel>Dirección</FormLabel>
                  <Input
                    type="text"
                    placeholder="Ingresa tu dirección"
                    ref={direccionRef}
                  />
                </FormControl>
                <FormControl id="registerEmail" isRequired>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <Input
                    type="email"
                    placeholder="Ingresa tu correo"
                    ref={registerEmailRef}
                  />
                </FormControl>
                <FormControl id="registerPassword" isRequired>
                  <FormLabel>Contraseña</FormLabel>
                  <Input
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    ref={registerPasswordRef}
                  />
                </FormControl>
                <Button
                  type="submit"
                  bgColor="red.800"
                  color="whitesmoke"
                  width="full"
                  _hover={{ backgroundColor: "rgba(200, 0, 0, 0.85)" }}
                >
                  Crear cuenta
                </Button>
              </VStack>
            </form>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
