import { QueryClient } from 'react-query';
 const cache24h = 1000 * 60 * 60 * 24;
 export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: cache24h,
    },
  },
});