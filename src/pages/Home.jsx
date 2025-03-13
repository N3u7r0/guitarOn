import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";
import { useProductsOffer } from "../hooks/useProductsOffer";
import { ItemListContainer } from "../components";
import banner from "../assets/images/banner.jpg";
import logo from "../assets/images/logo.png";
import { useContext } from "react";
import { UserContext } from "../context";



export const Home = () => {
  const { productsOffer, loading } = useProductsOffer();
  const { userDataContext } = useContext(UserContext);
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

      <div>
        <br />
        <h5>test de datos del cliente</h5>
        <br />
        {userDataContext && userDataContext.length > 0 ? (
          userDataContext.map((user, index) => (
            <ul key={index}>
              <li>Nombre: {user.nombre}</li>
              <li>Apellido: {user.apellido}</li>
              <li>direccion: {user.direccion}</li>
            </ul>
          ))
        ) : (
          <Text>No hay datos de usuario disponibles.</Text>
        )}
      </div>

      <Flex justifyContent={"center"} w={"100%"} p={0} m={0}>
        <ItemListContainer products={productsOffer} loading={loading} />
      </Flex>
    </Flex>
  );
};
