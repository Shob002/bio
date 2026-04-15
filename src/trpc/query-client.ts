import {
  QueryClient,
  defaultShouldDehydrateQuery,
} from "@tanstack/react-query";

import SuperJSON from "superjson";

/**
 * Create a stable React Query client
 * Works with SSR + Next.js App Router + tRPC
 */
export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000, // 30 seconds cache
        refetchOnWindowFocus: false,
        retry: 1,
      },

      dehydrate: {
        serializeData: SuperJSON.serialize,

        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },

      hydrate: {
        deserializeData: SuperJSON.deserialize,
      },
    },
  });