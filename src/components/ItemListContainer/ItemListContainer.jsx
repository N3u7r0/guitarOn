import { Box } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = (props) => {
    return(
    <Box fontSize={"x-large"}>
        <h2>{props.greeting}</h2>
    </Box>
    );
}


export default ItemListContainer;