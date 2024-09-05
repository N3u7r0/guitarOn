import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterMain } from './routes';
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer/Footer";
function App() {

  return (
    <ChakraProvider>
        <NavBar />
      <RouterMain>
        <Home />
      </RouterMain>
        <Footer />
    </ChakraProvider>
  );
}

export default App
