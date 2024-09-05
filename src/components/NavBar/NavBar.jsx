
import imagen from "../../assets/images/logo.png"
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
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from '../../components/CartWidget/CartWidget'

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} justifyContent={"space-between"} boxShadow={"0px -20px 40px"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

          <Grid templateColumns={'auto auto'} gap={3} alignItems={'center'}>

            {/* el incono tiene un backgraundColor provisorio, mas adelante crear un logo con una paleta de colores que concuerde con el efecto moon de la app */}
            <Img src={imagen} color={"white"} alt={"logo"} w={"200px"} h={"80%"} objectFit={'cover'}></Img>
            <CartWidget />
          </Grid >

          <Menu >
            <Flex  >
              <Grid templateColumns={'repeat(3, 1fr)'}  >
                <MenuItem justifyContent={"center"}>Home</MenuItem>
                <MenuItem justifyContent={"center"}>Ofertas</MenuItem>
                <MenuItem justifyContent={"center"}>Nosotros</MenuItem>
              </Grid>
              <Flex>
                <MenuGroup>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Productos
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Todos los productos</MenuItem>
                    <MenuDivider />
                    <MenuItem>Guitarras</MenuItem>
                    <MenuItem>Bajos</MenuItem>
                    <MenuItem>Baterias</MenuItem>
                  </MenuList>
                </MenuGroup>
              </Flex>
            </Flex>
          </Menu>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>

        </Flex>
      </Box>
    </>
  )
}

export default NavBar