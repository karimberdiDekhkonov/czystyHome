import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/index";
import { BrowserRouter } from "react-router-dom";
import "./i18next/i18next";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
