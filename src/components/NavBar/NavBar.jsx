import {
  Box,
  Flex,
  Grid,
  IconButton,
  Img,
  Collapse,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CartWidget } from "../../components";
import { Login } from "../Login"
import imagen from "../../assets/images/logo.png";

/* este custom es para q le de estilo a todos los btn */
const CustomMenuItem = ({ to, children }) => (
  <Link to={to}>
    <Button
      display={"flex"}
      w={"100%"}
      p={2}
      fontSize={"1rem"}
      justifyContent={"center"}
      variant="ghost"
      _hover={{
        backgroundColor: "rgba(200, 0, 0, 0.85)",
        color: "white",
      }}
    >
      {children}
    </Button>
  </Link>
);

export function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        justifyContent={"space-between"}
        position={"sticky"}
        top={"0"}
        w={"100%"}
        zIndex={"1"} // Esto es para que la navBar siempre esté arriba de todo
        boxShadow={"0px -20px 40px"}
        padding={0}
      >
        <Flex
          h={"3.5rem"}
          alignItems={"center"}
          justifyContent={"space-between"}
          padding={"1rem"}
        >
          {/* Logo y carrito */}
          <Grid templateColumns={"auto auto"} gap={2} alignItems={"center"}>
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

          {/* contendedor flex de  darkmode, menu */}
          <Flex gap={{ base: 2, lg: 7 }}>
            {/* Navegación para pantallas grandes */}
            <Flex display={{ base: "none", md: "flex" }} gap={4}>
              <CustomMenuItem to={"./"}>Home</CustomMenuItem>
              <CustomMenuItem to={"./nosotros"}>Nosotros</CustomMenuItem>

              {/* Menú desplegable Productos */}
              <Menu>
                <MenuButton
                  as={Button}
                  fontSize={"1rem"}
                  variant="ghost"
                  rightIcon={<ChevronDownIcon />}
                  _hover={{
                    backgroundColor: "rgba(200, 0, 0, 0.85)",
                    color: "white",
                  }}
                >
                  Productos
                </MenuButton>

                <MenuList>
                  <CustomMenuItem to={"/category/todosLosProductos"}>
                    Todos los productos
                  </CustomMenuItem>
                  <MenuDivider />
                  <CustomMenuItem to={"./category/guitarra"}>
                    Guitarras
                  </CustomMenuItem>
                  <CustomMenuItem to={"./category/bajo"}>Bajos</CustomMenuItem>
                  <CustomMenuItem to={"./category/bateria"}>
                    Baterías
                  </CustomMenuItem>
                </MenuList>
              </Menu>
            </Flex>

            {/* Botón de Login */}
            <Login />

            {/* Botón de hamburguesa */}
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Toggle Navigation"}
              display={{ base: "flex", md: "none" }}
              onClick={toggleMenu}
            />

            {/* Botones de colorMode */}
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {/* Colapso del menú en pantallas pequeñas */}
        <Collapse in={isOpen} animateOpacity>
          <Box pb={4} display={{ md: "none" }} justifyContent={"center"}>
            <Grid templateColumns={"1fr"} gap={4}>
              <CustomMenuItem to={"./"}>Home</CustomMenuItem>
              <CustomMenuItem to={"./nosotros"}>Nosotros</CustomMenuItem>
              <CustomMenuItem to={"/category/todosLosProductos"}>
                Todos los productos
              </CustomMenuItem>
              <CustomMenuItem to={"./category/guitarra"}>
                Guitarras
              </CustomMenuItem>
              <CustomMenuItem to={"./category/bajo"}>Bajos</CustomMenuItem>
              <CustomMenuItem to={"./category/bateria"}>
                Baterías
              </CustomMenuItem>
            </Grid>
          </Box>
        </Collapse>
      </Box>
    </>
  );
}
