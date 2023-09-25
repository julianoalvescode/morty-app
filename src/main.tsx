import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClientConnector } from "./services/connectors";
import "./design-system/styles/_variables.scss";
import "./design-system/styles/_global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientConnector>
      <App />
    </QueryClientConnector>
  </React.StrictMode>
);
