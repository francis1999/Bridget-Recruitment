import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 30 * 60 * 1000, // 30 minutes
      retry: 2, // Retry failed queries twice
      refetchOnWindowFocus: false, // Disable refetching when window is focused
    },
  },
});

export default queryClient;