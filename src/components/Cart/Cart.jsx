import {
    Card,
    CardBody,
    CardFooter,
    Stack,
    Image,
    Heading,
    Text,
    Divider,
    ButtonGroup,
    Button,
}from '@chakra-ui/react';
import { products } from "../../data/products.js";

const Cart = () => {

    products.map(
        (product) => {
            return (
                <ul>
                    <li>{product.id}</li>
                    <li>{product.producto}</li>
                    <li>{ }</li>
                    <li>{ }</li>
                </ul>
            )
        }
    );

}


export default Cart