import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const query = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 1000 * 60 * 60, // 1 hour,
      cacheTime: 1000 * 60 * 40, // 40 minutes,
      _optimisticResults: "optimistic",
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
