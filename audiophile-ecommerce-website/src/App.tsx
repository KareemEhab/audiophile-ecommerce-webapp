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
import useProducts, { Product } from "./hooks/useProducts";

export interface CartItem {
  product: Product;
  quantity: number;
}

function App() {
  const location = useLocation();
  const isFormPage =
    location.pathname === "/login" || location.pathname === "/register";

  useEffect(() => {
    if (!localStorage.getItem("audiophile-token")) navigate("/login");
  }, [location]);

  const { products, isLoading } = useProducts();
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartItem[]>([]);

  if (isLoading) {
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
  }

  return (
    <VStack width="100vw" minH="100vh">
      {!isFormPage && !isLoading && <Navbar cart={cart} setCart={setCart} />}

      <Routes>
        <Route
          path="/:category"
          element={<CategoryPage products={products} />}
        />
        <Route
          path="/:category/:slug"
          element={<ProductPage cart={cart} setCart={setCart} />}
        />
        <Route
          path="/checkout"
          element={<CheckoutPage cart={cart} setCart={setCart} />}
        />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!isFormPage && !isLoading && <Footer />}
    </VStack>
  );
}

export default App;
