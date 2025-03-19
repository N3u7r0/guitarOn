import { ChakraProvider } from "@chakra-ui/react";
import { LayoutMain } from "./layout";
import { CartProvider, ProductsProvider, UserProvider } from "./context";
import "./style.css";

function App() {
  return (
    <ChakraProvider>

        <UserProvider>
      <ProductsProvider>
          <CartProvider>
            <LayoutMain />
          </CartProvider>
      </ProductsProvider>
        </UserProvider>

    </ChakraProvider>
  );
}

export default App;
