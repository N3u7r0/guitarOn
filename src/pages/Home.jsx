import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";
import { useProductsOffer } from "../hooks/useProductsOffer";
import { ItemListContainer } from "../components";
import banner from "../assets/images/banner.jpg";
import logo from "../assets/images/logo.png";

export const Home = () => {
  const { productsOffer, loading } = useProductsOffer();

  return (
    <Flex
      textAlign={"center"}
      py={10}
      w={"100%"}
      p={0}
      m={0}
      flexDir={"column"}
    >
      <Box
        w={"100%"}
        h={"25vh"}
        backgroundImage={`url(${banner})`}
        backgroundSize="cover"
        backgroundPosition="top"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Flex direction="column" alignItems="center">
          <Image src={logo} w={"25vw"} minW={"15rem"} />
          <Heading
            position={"relative"}
            fontSize={"medium"}
            whiteSpace="normal"
            bottom={"1.5vw"}
            color={"whitesmoke"}
            textShadow={"5px 5px 7px red"}
          >
            la musica es nuestra pasion
          </Heading>
        </Flex>
      </Box>
      <Text mt={"5vh"} fontSize={"xx-large"}>
        Ofertas
      </Text>

     
        <ItemListContainer products={productsOffer} loading={loading} />
   
    </Flex>
  );
};
