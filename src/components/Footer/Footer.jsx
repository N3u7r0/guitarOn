import { Box, useColorModeValue } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <footer>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        position={"fixed"}
        bottom={"0"}
        width={"100%"}
        height={"2vh"}
        backgroundColor={"rgba(145, 0, 0, 0.87)"}
        boxShadow={"0px 20px 40px"}
      >
        <h1>
          <strong>esto es un futuro footer!!!</strong>
        </h1>
      </Box>
    </footer>
  );
};
