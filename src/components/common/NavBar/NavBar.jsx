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
import { CartWidget, BtnLogin,} from "../../../components";
import { useCheckLoginUser, useLogoutUser } from "../../../hooks";

import imagen from "../../../assets/images/logo.png";

/* Componente de estilo para botones */
const CustomMenuItem = ({ to, children, onClick }) => (
  <Link to={to} onClick={onClick}>
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
  const { colorMode, toggleColorMode } = useColorMode(); // hook de chakra 
  const { logOut } = useLogoutUser();
  const { userCheck } = useCheckLoginUser();
  const [isOpen, setIsOpen] = useState(false); // estado del menu hamburguesa
  const [isMenuOpen, setIsMenuOpen] = useState(false); // estado del menu de productos
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProductMenu = () => setIsMenuOpen(!isMenuOpen); // alterna el menú de productos
  const closeProductMenu = () => setIsMenuOpen(false); // cierra el menú de productos
 

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        justifyContent={"space-between"}
        position={"sticky"}
        top={"0"}
        w={"100%"}
        zIndex={"1"} // para que la navBar siempre este arriba
        boxShadow={"0px -20px 40px"}
        padding={0}
      >
        <Flex
          h={"3.5rem"}
          alignItems={"center"}
          justifyContent={"space-between"}
          padding={"1rem"}
        >
          {/* logo y carrito */}
          <Grid
            templateColumns={"auto auto"}
            gap={2}
            alignItems={"center"}
            mr={3}
          >
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

          {/* dark mode y Menu */}
          <Flex gap={{ base: 2, lg: 7 }}>
            {/* menu para pantallas grandes */}
            <Flex display={{ base: "none", md: "flex" }} gap={4}>
              <CustomMenuItem to={"./"}>Home</CustomMenuItem>
              <CustomMenuItem to={"./Contacto"}>Contactanos</CustomMenuItem>

              {/* Menu desplegable de productos */}
              <Menu isOpen={isMenuOpen} onClose={closeProductMenu}>
                <MenuButton
                  as={Button}
                  fontSize={"1rem"}
                  variant="ghost"
                  rightIcon={<ChevronDownIcon />}
                  _hover={{
                    backgroundColor: "rgba(200, 0, 0, 0.85)",
                    color: "white",
                  }}
                  onClick={toggleProductMenu}
                >
                  Productos
                </MenuButton>
                <MenuList>
                  <CustomMenuItem
                    to={"/category/todosLosProductos"}
                    onClick={closeProductMenu}
                  >
                    Todos los productos
                  </CustomMenuItem>
                  <MenuDivider />
                  <CustomMenuItem
                    to={"./category/guitarra"}
                    onClick={closeProductMenu}
                  >
                    Guitarras
                  </CustomMenuItem>
                  <CustomMenuItem
                    to={"./category/bajo"}
                    onClick={closeProductMenu}
                  >
                    Bajos
                  </CustomMenuItem>
                  <CustomMenuItem
                    to={"./category/bateria"}
                    onClick={closeProductMenu}
                  >
                    Baterías
                  </CustomMenuItem>
                </MenuList>
              </Menu>

              {userCheck && (
                <CustomMenuItem
                  to={"MiCuenta"}
                  onClick={() => setIsOpen(false)}
                >
                  Mi Cuenta
                </CustomMenuItem>
              )}
            </Flex>

            {/* botones de Login y Logout */}
            {userCheck ? <CustomMenuItem onClick={logOut}>LogOut</CustomMenuItem> : <BtnLogin />}

            {/* btn hamburguesa */}
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Toggle Navigation"}
              display={{ base: "flex", md: "none" }}
              onClick={toggleMenu}
            />

            {/* btn dark */}
            <Button
              onClick={toggleColorMode}
              _hover={{
                backgroundColor: "rgba(200, 0, 0, 0.85)",
                color: "white",
                boxShadow: "0px 0px 60px 10px rgb(0, 0, 0)",
              }}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {/* Menú desplegable para pantallas pequeñas */}
        <Collapse in={isOpen} animateOpacity>
          <Box pb={4} display={{ md: "none" }} justifyContent={"center"}>
            <Grid templateColumns={"1fr"} gap={4}>
              {userCheck ? (
                <CustomMenuItem
                  to={"MiCuenta"}
                  onClick={() => setIsOpen(false)}
                >
                  Mi Cuenta
                </CustomMenuItem>
              ) : (
                <Box display={"none"} />
              )}
              <br />
              <CustomMenuItem to={"./"} onClick={() => setIsOpen(false)}>
                Home
              </CustomMenuItem>
              <CustomMenuItem
                to={"./Contacto"}
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </CustomMenuItem>
              <CustomMenuItem
                to={"/category/todosLosProductos"}
                onClick={() => setIsOpen(false)}
              >
                Todos los productos
              </CustomMenuItem>
              <CustomMenuItem
                to={"./category/guitarra"}
                onClick={() => setIsOpen(false)}
              >
                Guitarras
              </CustomMenuItem>
              <CustomMenuItem
                to={"./category/bajo"}
                onClick={() => setIsOpen(false)}
              >
                Bajos
              </CustomMenuItem>
              <CustomMenuItem
                to={"./category/bateria"}
                onClick={() => setIsOpen(false)}
              >
                Baterías
              </CustomMenuItem>
            </Grid>
          </Box>
        </Collapse>
      </Box>
    </>
  );
}