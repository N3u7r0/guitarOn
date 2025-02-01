import { ChakraProvider } from "@chakra-ui/react";
import { LayoutMain } from "./layout/LayoutMain";
import { CartProvider } from "./context";
import { ProductsProvider } from "./context/productsContext"; // Corregido a PascalCase

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
