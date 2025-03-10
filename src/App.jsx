import { ChakraProvider } from "@chakra-ui/react";
import { LayoutMain } from "./layout";
import { CartProvider, ProductsProvider, UserProvider } from "./context";

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
