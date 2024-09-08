import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { LayoutMain } from './layout/LayoutMain';
function App() {

  return (
    <ChakraProvider>
      <LayoutMain />
    </ChakraProvider>
  );
}

export default App