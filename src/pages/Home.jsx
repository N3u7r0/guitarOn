import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";
import { useProductsOffer } from "../hooks/useProductsOffer";
import { ItemListContainer } from "../components";
import banner from "../assets/images/banner.jpg";
import logo from "../assets/images/logo.png";

export const Home = () => {
  const { productsOffer } = useProductsOffer();

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
            /*   base = pantalla chica, md = p.mediana, lg = p. grande */
            fontSize={{ base: "1.8vw", md: "1.4vw", lg: "1.3vw" }}
            whiteSpace="normal"
            bottom={"1.5vw"}
            color={"whitesmoke"}
            textShadow={"5px 5px 7px red"}
          >
            la musica es nuestra pasion
          </Heading>
        </Flex>
      </Box>
      <Text margin={1} fontSize={"3vw"}>
        Ofertas
      </Text>
      <Flex justifyContent={"center"} w={"100%"} p={0} m={0}>
        <ItemListContainer products={productsOffer} />
      </Flex>
    </Flex>
  );
};
