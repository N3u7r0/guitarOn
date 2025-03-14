import { Box, Flex, Text, Stack } from "@chakra-ui/react";
import { Spin } from "../ui";

export const User = ({ userData, loading }) => {
  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <Stack spacing={4}>
          {userData.map((user, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="md"
              p={4}
              bg="white"
            >
              <Flex direction="column">
                <Text fontWeight="bold" fontSize="lg" color={"black"}>
                  {user.nombre || "Nombre no disponible"} {user.apellido || "Apellido no disponible"}
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
        </Stack>
      )}
    </>
  );
};
