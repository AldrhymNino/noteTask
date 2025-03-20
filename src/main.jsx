import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/app.css";

// Context
import { CategoryProvider, TaskProvider } from "./context";
import { StorageProvider } from "./context";

// Component App
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StorageProvider>
      <TaskProvider>
        <CategoryProvider>
          <App />
        </CategoryProvider>
      </TaskProvider>
    </StorageProvider>
  </StrictMode>
);
