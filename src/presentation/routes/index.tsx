import { lazy } from "react";

import { createBrowserRouter } from "react-router-dom";
import { ProxyLoading } from "@/presentation/proxy/loading";

const Home = lazy(() => import("@/design-system/pages/Home"));
const ErrorPage = lazy(() => import("@/design-system/pages/Error"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProxyLoading>
        <Home />
      </ProxyLoading>
    ),
    errorElement: (
      <ProxyLoading>
        <ErrorPage />
      </ProxyLoading>
    ),
  },
]);
