import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const query = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export function QueryClientConnector({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={query}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
}
