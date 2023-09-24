import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const query = new QueryClient();

export function QueryClientConnector({
  children,
}: {
  children: React.ReactNode;
}) {
  return <QueryClientProvider client={query}>{children}</QueryClientProvider>;
}
