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

const CustomMenuItem = ({ to, children }) => (
  <Link to={to}>
    <MenuItem
      fontSize={{ base: "0.82rem", md: "0.8rem", lg: "1rem" }}
      justifyContent={"center"}
      as={Button}
      _hover={{
        backgroundColor: "rgba(200, 000, 000, 0.85)",
        color: "white",
      }}
    >
      {children}
    </MenuItem>
  </Link>
);

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
        zIndex={"1"} //esto es para que la navBar siempre esté arriba de todo
        boxShadow={"0px -20px 40px"}
        padding={0}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          padding={{ base: "0px", sm: 2, lg: 7 }}
        >
          <Grid templateColumns={"auto auto"} gap={3} alignItems={"center"}>
            <Link to={"./"}>
              <Img
                src={imagen}
                color={"white"}
                alt={"logo"}
                w={"200px"}
                h={"80%"}
                objectFit={"cover"}
                display={{ base: "none", sm: "block" }}
              ></Img>
            </Link>
            <CartWidget />
          </Grid>

          <Menu>
            <Flex>
              <Grid
                templateColumns={"repeat(2, 1fr)"}
                margin={"0.2rem"}
                alignContent={"center"}
              >
                <CustomMenuItem to={"./"}>Home</CustomMenuItem>
                <CustomMenuItem to={"./nosotros"}>Nosotros</CustomMenuItem>
              </Grid>

              <Grid
                templateColumns={"repeat(2, 1fr)"}
                margin={"0.2rem"}
                alignContent={"center"}
              >
                <MenuGroup>
                  <MenuButton
                    fontSize={{ base: "0.82rem", md: "0.8rem", lg: "1rem" }}
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
                    <CustomMenuItem to={"/category/todosLosProductos"}>
                      Todos los productos
                    </CustomMenuItem>
                    <MenuDivider />
                    <CustomMenuItem to={"./category/guitarra"}>
                      Guitarras
                    </CustomMenuItem>
                    <CustomMenuItem to={"./category/bajo"}>
                      Bajos
                    </CustomMenuItem>
                    <CustomMenuItem to={"./category/bateria"}>
                      Baterias
                    </CustomMenuItem>
                  </MenuList>
                </MenuGroup>
              </Grid>
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
