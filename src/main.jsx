import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./Context/AuthContext";  // Ensure the correct path

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>  {/* Wrap with AuthProvider */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);
