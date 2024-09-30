import {
  Box,
  Flex,
  Grid,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Img,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { CartWidget } from "../../components";
import imagen from "../../assets/images/logo.png";

export function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        justifyContent={"space-between"}
        position={"sticky"}
        top={"0"}
        w={"100%"}
        zIndex={"1"} //esto es para que la navBar siempre este arriba de todo
        boxShadow={"0px -20px 40px"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Grid templateColumns={"auto auto"} gap={3} alignItems={"center"}>
            <Link to={"./"}>
              <Img
                src={imagen}
                color={"white"}
                alt={"logo"}
                w={"200px"}
                h={"80%"}
                objectFit={"cover"}
              ></Img>
            </Link>
            <CartWidget />
          </Grid>

          <Menu>
            <Flex>
              <Grid templateColumns={"repeat(3, 1fr)"} margin={"0 1rem"}>
                <Link to={"./"}>
                  <MenuItem
                    justifyContent={"center"}
                    as={Button}
                    _hover={{
                      backgroundColor: "rgba(200, 000, 000, 0.85)",
                      color: "white",
                    }}
                  >
                    Home
                  </MenuItem>
                </Link>

                <Link to={"./oferta"}>
                  <MenuItem
                    justifyContent={"center"}
                    as={Button}
                    _hover={{
                      backgroundColor: "rgba(200, 000, 000, 0.85)",
                      color: "white",
                    }}
                  >
                    Ofertas
                  </MenuItem>
                </Link>

                <Link to={"./nosotros"}>
                  <MenuItem
                    justifyContent={"center"}
                    as={Button}
                    _hover={{
                      backgroundColor: "rgba(200, 000, 000, 0.85)",
                      color: "white",
                    }}
                  >
                    Nosotros
                  </MenuItem>
                </Link>
              </Grid>
              <Flex>
                <MenuGroup>
                  <MenuButton
                    as={Button}
                    _hover={{
                      backgroundColor: "rgba(200, 000, 000, 0.85)",
                      color: "white",
                    }}
                    rightIcon={<ChevronDownIcon />}
                  >
                    Productos
                  </MenuButton>
                  <MenuList>
                    <Link to={"/category/todosLosProductos"}>
                      <MenuItem
                        as={Button}
                        _hover={{
                          backgroundColor: "rgba(200, 000, 000, 0.85)",
                          color: "white",
                        }}
                      >
                        Todos los productos
                      </MenuItem>
                    </Link>
                    <MenuDivider />
                    <Link to={"./category/guitarra"}>
                      <MenuItem
                        as={Button}
                        _hover={{
                          backgroundColor: "rgba(200, 000, 000, 0.85)",
                          color: "white",
                        }}
                      >
                        Guitarras
                      </MenuItem>
                    </Link>
                    <Link to={"./category/bajo"}>
                      <MenuItem
                        as={Button}
                        _hover={{
                          backgroundColor: "rgba(200, 000, 000, 0.85)",
                          color: "white",
                        }}
                      >
                        Bajos
                      </MenuItem>
                    </Link>
                    <Link to={"./category/bateria"}>
                      <MenuItem
                        as={Button}
                        _hover={{
                          backgroundColor: "rgba(200, 000, 000, 0.85)",
                          color: "white",
                        }}
                      >
                        Baterias
                      </MenuItem>
                    </Link>
                  </MenuList>
                </MenuGroup>
              </Flex>
            </Flex>
          </Menu>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
