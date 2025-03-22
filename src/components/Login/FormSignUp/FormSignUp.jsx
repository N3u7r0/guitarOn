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
import { Toast } from "../../ui";
import { useCreateUser } from "../../../hooks";

export const FormSignUp = ({ onSuccess }) => {
  const {
    error,
    SignUp,
    registerEmailRef,
    registerPasswordRef,
    nombreRef,
    apellidoRef,
    telefonoRef,
    direccionRef,
  } = useCreateUser(onSuccess);

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
                  <FormLabel>Contraseña (mínimo 6 caracteres)</FormLabel>
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
      <Toast error={error}  />
    </>
  );
};
