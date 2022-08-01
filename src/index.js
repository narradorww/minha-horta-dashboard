import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { VeggieProvider } from "./providers/veggie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <VeggieProvider>
      <App />
    </VeggieProvider>
    </BrowserRouter>
  </React.StrictMode>
);
