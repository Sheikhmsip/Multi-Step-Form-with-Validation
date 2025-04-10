import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DarkModeProvider } from "./contexts/darkMode.jsx";
import { QueryProvider } from "./contexts/QueryProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </QueryProvider>
  </StrictMode>
);
