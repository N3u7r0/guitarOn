import { Box, Heading, Text } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Box textAlign={"center"} py={10}>
      <Heading itemType={"h2"} size={"xl"} _hover={{ color: "red.500" }}>
        Home
      </Heading>
      <br />
      <Text>
        profe las cosas siguen en poroductos,el trabajo cumple con lo que pide{" "}
        <br />
        la ultima entrega, pero me gustaria decorar y terminan el home, ofertas
        <br />
        y nosotros (mas otros detalles como el footer. si puedo completo esas
        cosas.
        <br />
        saludos!!!
      </Text>
    </Box>
  );
};
