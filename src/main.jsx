import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthPRovider from "./context/AuthPRovider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthPRovider>
      <App />
    </AuthPRovider>
  </StrictMode>
);
