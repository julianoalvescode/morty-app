import { LoadingPage } from "@/design-system/pages";
import { Suspense } from "react";

import { LoadingProxyProps } from "./types";

export function ProxyLoading({ children }: LoadingProxyProps) {
  return <Suspense fallback={<LoadingPage />}>{children}</Suspense>;
}
