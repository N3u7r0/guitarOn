import { ChakraProvider } from "@chakra-ui/react";
import { LayoutMain } from "./layout/LayoutMain";
import { CartProvider } from "./context";
import { ProductsProvider } from "./context/ProductsContext";

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
