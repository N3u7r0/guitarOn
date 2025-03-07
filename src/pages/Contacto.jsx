import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

export function Contacto() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      width="100%"
      mt={{ base: "1vh", md: "10vh", lg: "20vh" }}
    >
      <Box bg="#000000" color="white" borderRadius="lg" p="2vw" width="90%">
        <Box p={4} textAlign="center" height="100%">
          <Wrap
            spacing={{ base: 5, md: 5, lg: 100 }}
            justify={{ base: "center", md: "space-evenly", lg: "center" }}
            align="center"
            height="100%"
          >
            <WrapItem>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height="100%"
              >
                <Heading as="h6">Contacto</Heading>
                <Text mt={{ base: 3, lg: 5 }} p={5} color="gray.500">
                  Dejanos tus datos con tu mensaje y <br /> nos pondremos en
                  contacto con vos.
                </Text>
                <Box py={{ base: 5, lg: 10 }}>
                  <VStack spacing={3} alignItems="center">
                    <Button
                      size="md"
                      height="48px"
                      width="cover"
                      variant="ghost"
                      color="#DCE2FF"
                      leftIcon={<MdPhone color="#FF0000" size="20px" />}
                    >
                      +54 11-4254442
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      width="cover"
                      variant="ghost"
                      color="#DCE2FF"
                      leftIcon={<MdEmail color="#FF0000" size="20px" />}
                    >
                      contact@guitaron.com
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      width="cover"
                      variant="ghost"
                      color="#DCE2FF"
                      leftIcon={<MdLocationOn color="#FF0000" size="20px" />}
                    >
                      Av.falsa 86, Glew
                    </Button>
                  </VStack>
                </Box>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box
                bg="white"
                borderRadius="lg"
                boxShadow="lg"
                height="100%"
                width="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Box m={8} color="#0B0E3F">
                  <VStack
                    spacing={5}
                    as="form"
                    action="https://formsubmit.co/8462d34d4e6022215eb44c0667abe20a"
                    method="POST"
                  >
                    {/* esta  linea de nput es para q no se active el captcha*/}
                    <input type="hidden" name="_captcha" value="false" />
                    <FormControl id="name">
                      <FormLabel>Tu nombre</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement pointerEvents="none">
                          <BsPerson color="gray.800" />
                        </InputLeftElement>
                        <Input type="text" name="name" size="md" required />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="email">
                      <FormLabel>Tu email</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement pointerEvents="none">
                          <MdOutlineEmail color="gray.800" />
                        </InputLeftElement>
                        <Input type="email" name="email" size="md" required />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="message">
                      <FormLabel>Mensaje</FormLabel>
                      <Textarea
                        name="message"
                        borderColor="gray.300"
                        _hover={{
                          borderRadius: "gray.300",
                        }}
                        placeholder="Deja tu mensaje d-.-b"
                        required
                      />
                    </FormControl>
                    <FormControl id="submit" float="right">
                      <Button
                        type="submit"
                        variant="solid"
                        bg="#FF0000"
                        color="white"
                        _hover={{ bg: "#CC0000" }}
                      >
                        Enviar
                      </Button>
                    </FormControl>
                  </VStack>
                </Box>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
    </Flex>
  );
}
