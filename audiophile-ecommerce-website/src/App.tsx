import { VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";

function App() {
  return (
    <VStack width="100vw">
      <Navbar />
      {/* <HomePage /> */}
      {/* <CategoryPage /> */}
      <ProductPage />
      <Footer />
    </VStack>
  );
}

export default App;
