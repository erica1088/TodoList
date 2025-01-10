import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    
  </StrictMode>
);
