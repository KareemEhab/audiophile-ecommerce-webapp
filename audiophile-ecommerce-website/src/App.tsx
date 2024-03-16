import { VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Category from "./components/Category";

function App() {
  return (
    <VStack width="100vw">
      <Navbar />
      {/* <Home /> */}
      <Category />
      <Footer />
    </VStack>
  );
}

export default App;
