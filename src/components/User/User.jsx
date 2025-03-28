
import {
  Box,
  Flex,
  Text,

  Divider,
} from "@chakra-ui/react";

import { Spin } from "../ui";

export const User = ({ userDataContext, loading }) => {


  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <Flex
       
          gap="2rem"
          flexWrap="wrap"
          justifyContent="center"
        >
          {/* Datos de usuario */}

          {userDataContext.map((user, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="md"
              p={4}
              bg="white"
              justifyContent="center"
            >
              <Text
                color="black"
                textAlign="center"
                fontSize="x-large"
              >
                Mis datos
              </Text>
              <Divider />
              <br />
              <Flex direction="column">
                <Text fontWeight="bold" fontSize="lg" color="black">
                  {user.nombre || "Nombre no disponible"}{" "}
                  {user.apellido || "Apellido no disponible"}
                </Text>
                <Text fontSize="md" color="gray.600">
                  Email: {user.email || "Email no disponible"}
                </Text>
                <Text fontSize="md" color="gray.600">
                  Teléfono: {user.telefono || "Teléfono no disponible"}
                </Text>
                <Text fontSize="md" color="gray.600">
                  Dirección: {user.direccion || "Dirección no disponible"}
                </Text>
              </Flex>
            </Box>
          ))}
        </Flex>
      )}
    </>
  );
};
