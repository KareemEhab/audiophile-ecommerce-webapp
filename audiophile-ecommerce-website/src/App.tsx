import { VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <VStack width="100vw" overflowX="hidden">
      <Navbar />
      <Home />
    </VStack>
  );
}

export default App;
