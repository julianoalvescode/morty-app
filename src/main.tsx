import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClientConnector } from "./services/connectors";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientConnector>
      <App />
    </QueryClientConnector>
  </React.StrictMode>
);
