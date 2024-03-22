import { VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import Footer from "./components/Footer";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const isFormPage =
    location.pathname === "/login" || location.pathname === "/register";
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("audiophile-token")) navigate("/login");
  }, [location]);

  return (
    <VStack width="100vw">
      {!isFormPage && <Navbar />}

      <Routes>
        <Route path="/headphones" element={<CategoryPage />} />
        <Route path="/speakers" element={<CategoryPage />} />
        <Route path="/earphones" element={<CategoryPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!isFormPage && <Footer />}
    </VStack>
  );
}

export default App;
