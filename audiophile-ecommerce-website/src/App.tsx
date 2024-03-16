import { VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <VStack width="100vw" overflowX="hidden">
      <Navbar />
      <Home />
      <Footer />
    </VStack>
  );
}

export default App;
