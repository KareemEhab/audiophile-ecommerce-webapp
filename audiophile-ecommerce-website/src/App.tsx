import { VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <VStack width="100vw">
      <Navbar />
      {/* <HomePage /> */}
      {/* <CategoryPage /> */}
      {/* <ProductPage /> */}
      <CheckoutPage />
      <Footer />
    </VStack>
  );
}

export default App;
