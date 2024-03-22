import { HStack, Spinner, VStack } from "@chakra-ui/react";
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
import { useEffect, useState } from "react";
import useProducts from "./hooks/useProducts";

function App() {
  const location = useLocation();
  const isFormPage =
    location.pathname === "/login" || location.pathname === "/register";

  useEffect(() => {
    if (!localStorage.getItem("audiophile-token")) navigate("/login");
  }, [location]);

  const { products, isLoading } = useProducts();
  const navigate = useNavigate();
  if (isLoading)
    return (
      <HStack
        width="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner size="xl" />
      </HStack>
    );

  const [cart, setCart] = useState({});

  return (
    <VStack width="100vw">
      {!isFormPage && !isLoading && <Navbar />}

      <Routes>
        <Route
          path="/:category"
          element={<CategoryPage products={products} />}
        />
        <Route path="/:category/:slug" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!isFormPage && !isLoading && <Footer />}
    </VStack>
  );
}

export default App;
