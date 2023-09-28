import { ErrorPage } from "@/design-system/pages";
import { lazy } from "react";

import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("@/design-system/pages/Home"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);
