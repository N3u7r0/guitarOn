import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Footer from "./components/Footer/Footer"
import NavBar from './components/NavBar/NavBar';
import Home from "./pages/Home";
import { RouterMain } from './routes';
function App() {

  return (
    <ChakraProvider>
      <RouterMain>
      <NavBar />
        <Home />
      <Footer />
      </RouterMain>
    </ChakraProvider>
  );
}

export default App
