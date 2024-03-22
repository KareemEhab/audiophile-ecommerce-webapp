import { VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import CheckoutPage from "./pages/CheckoutPage";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <VStack width="100vw">
      <Navbar />

      <Routes>
        <Route path="/headphones" element={<CategoryPage />} />
        <Route path="/speakers" element={<CategoryPage />} />
        <Route path="/earphones" element={<CategoryPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </VStack>
  );
}

export default App;
