import { Box, useColorModeValue,Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      itemType="footer"
      bg={useColorModeValue("gray.100", "gray.900")}
      position={"fixed"}
      bottom={"0"}
      width={"100%"}
      height={"2.5vh"}
      backgroundColor={"rgba(145, 0, 0, 0.87)"}
      boxShadow={"0px 20px 40px"}
    >
      <Text itemType="h3" color={"white"} fontSize={"large"}>Esta app fue creada por <b>B</b>rian <b>F</b>abian <b>S</b>abatini.</Text> 
    </Box>
  );
};
