import { Link } from "react-router-dom";
import { MoonIcon, SunIcon, ChevronDownIcon } from "@chakra-ui/icons";
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
import { CartWidget } from "../../components"
import {useProductsByCategory} from "../../hooks";
import imagen from "../../assets/images/logo.png";
export function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { clickGuitarras, clickBajos, clickBaterias } = useProductsByCategory();

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        justifyContent={"space-between"}
        position={"fixed"}
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
              <Grid templateColumns={"repeat(3, 1fr)"}>
                <MenuItem justifyContent={"center"} as={Button}>
                  <Link to={"./"}> Home</Link>
                </MenuItem>
                <MenuItem justifyContent={"center"} as={Button}>
                  <Link to={"./ofertas"}>Ofertas</Link>
                </MenuItem>
                <MenuItem justifyContent={"center"} as={Button}>
                  <Link to={"./nosotros"}>Nosotros</Link>
                </MenuItem>
              </Grid>
              <Flex>
                <MenuGroup>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Productos
                  </MenuButton>
                  <MenuList>
                    <MenuItem as={Button}>
                      <Link to={"./todosLosProductos"}>
                        Todos los productos
                      </Link>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem as={Button}>
                      <Link to={"./category/guitarra"} onClick={clickGuitarras}>
                        Guitarras
                      </Link>
                    </MenuItem>
                    <MenuItem as={Button}>
                      <Link to={"./category/bajo"} onClick={clickBajos}>
                        Bajos
                      </Link>
                    </MenuItem>
                    <MenuItem as={Button}>
                      <Link to={"./category/bateria"} onClick={clickBaterias}>
                        Baterias
                      </Link>
                    </MenuItem>
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
