import { ChakraProvider } from "@chakra-ui/react";
import { LayoutMain } from "./layout";
import { CartProvider, ProductsProvider, UserProvider, ToastProvider } from "./context";
import "./style.css";

function App() {
  return (
    <ChakraProvider>
      <ToastProvider>
        <UserProvider>
          <ProductsProvider>
            <CartProvider>
              <LayoutMain />
            </CartProvider>
          </ProductsProvider>
        </UserProvider>
      </ToastProvider>
    </ChakraProvider>
  );
}

export default App;
