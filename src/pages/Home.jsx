import { Box, Heading, } from "@chakra-ui/react";


export const Home = () => {
  return (
    <Box textAlign={"center"} py={10}>
      <Heading itemType={"h2"} size={"xl"} _hover={{ color: "red.500" }}>
        Home
      </Heading>
       
    
    </Box>
  );
};
