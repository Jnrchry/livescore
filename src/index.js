import React from "react";
import ReactDOM from "react-dom/client";
import "../public/index.html";
import App from "./App";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
