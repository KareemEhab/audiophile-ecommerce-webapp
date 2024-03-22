import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import App from "./App.tsx";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
