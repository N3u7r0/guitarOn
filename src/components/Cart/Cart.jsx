
import { products } from "../../data/products.js";

export const Cart = () => {

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