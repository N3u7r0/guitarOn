import { ChakraProvider } from "@chakra-ui/react";
import { LayoutMain } from "./layout/LayoutMain";
import { CartProvider } from "./context";

function App() {
  return (
    <ChakraProvider>
      <CartProvider>
        <LayoutMain />
      </CartProvider>
    </ChakraProvider>
  );
}

export default App;
