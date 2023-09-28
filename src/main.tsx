import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientConnector } from "./services/connectors";
import "./design-system/styles/_variables.scss";
import "./design-system/styles/_global.scss";
import { router } from "@/presentation/routes";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientConnector>
      <RouterProvider router={router} />
    </QueryClientConnector>
  </React.StrictMode>
);
