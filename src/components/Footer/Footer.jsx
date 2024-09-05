import {
    Box,
    useColorModeValue,
} from '@chakra-ui/react'
import "./Footer.css"

export const Footer = () => {
    return (
        <footer >
            <Box bg={useColorModeValue('gray.100', 'gray.900')}  boxShadow={"0px 20px 40px"}>
                <h1><strong>esto es un futuro footer!!!</strong></h1>
            </Box>
        </footer>
    )
};