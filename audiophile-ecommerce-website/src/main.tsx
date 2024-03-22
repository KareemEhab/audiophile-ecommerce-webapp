import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
