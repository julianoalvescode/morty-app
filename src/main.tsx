import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { QueryClientConnector } from "./services/connectors";
import "./design-system/styles/_variables.scss";
import "./design-system/styles/_global.scss";
import { router } from "@/presentation/routes";
import { RouterProvider } from "react-router-dom";
import { LoadingPage } from "@/design-system/pages";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientConnector>
      <Suspense fallback={<LoadingPage />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientConnector>
  </React.StrictMode>
);
