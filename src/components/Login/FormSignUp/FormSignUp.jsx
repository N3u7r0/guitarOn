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
import { useCreateUser } from "../../../hooks";

export const FormSignUp = () => {
  const {SignUp, handleInputChange, formValues } = useCreateUser();

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
            <form onSubmit={(e) => { e.preventDefault(); SignUp(); }}>

              <VStack spacing={4}>
                <FormControl id="nombre" isRequired>
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    type="text"
                    name="nombre"
                    placeholder="Ingresa tu nombre"
                    required
                    maxLength="30"
                    value={formValues.nombre}
                    onChange={handleInputChange}
                    autoComplete="name"
                  />
                </FormControl>
                <FormControl id="apellido" isRequired>
                  <FormLabel>Apellido</FormLabel>
                  <Input
                    type="text"
                    name="apellido"
                    required
                    maxLength="30"
                    placeholder="Ingresa tu apellido"
                    value={formValues.apellido}
                    onChange={handleInputChange}
                    autoComplete="family-name"
                  />
                </FormControl>
                <FormControl id="telefono" type="number" isRequired>
                  <FormLabel>Teléfono</FormLabel>
                  <Input
                    type="number"
                    name="telefono"
                    placeholder="Ingresa tu número de teléfono"
                    value={formValues.telefono}
                    onChange={handleInputChange}
                    autoComplete="phone"
                  />
                </FormControl>
                <FormControl id="direccion" isRequired>
                  <FormLabel>Dirección</FormLabel>
                  <Input
                    type="text"
                    name="direccion"
                    required
                    maxLength="30"
                    placeholder="Ingresa tu dirección"
                    value={formValues.direccion}
                    onChange={handleInputChange}
                    autoComplete="street-address"
                  />
                </FormControl>
                <FormControl id="registerEmail" isRequired>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Ingresa tu correo"
                    value={formValues.email}
                    onChange={handleInputChange}
                    autoComplete="email"
                  />
                </FormControl>
                <FormControl id="registerPassword" isRequired>
                  <FormLabel>Contraseña (mínimo 6 caracteres)</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Ingresa tu contraseña"
                    value={formValues.password}
                    onChange={handleInputChange}
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
