import { ChakraProvider } from "@chakra-ui/react";
import { LayoutMain } from "./layout";
import { CartProvider, ProductsProvider } from "./context";

function App() {
  return (
    <ChakraProvider>

      <ProductsProvider>
        <CartProvider>
          <LayoutMain />
        </CartProvider>
      </ProductsProvider>

    </ChakraProvider>
  );
}

export default App;
