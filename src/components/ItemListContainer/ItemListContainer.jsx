import { Box } from '@chakra-ui/react';
import Cart from '../Cart/Cart.jsx';

export const ItemListContainer = (props) => {

    if (true) {

        return (
            <Box >
                <Cart />
            </Box>
        );
    } else {

        return (
            <Box fontSize={"x-large"}>
                <h2>{props.greeting}</h2>
            </Box>
        );
    }
}


