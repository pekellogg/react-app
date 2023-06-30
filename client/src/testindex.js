import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import TestApp from "./app/TestApp";

const queryClient = new QueryClient();

const domNode = document.getElementById("root");
const root = createRoot(domNode);

// "/api/v1/cameras"
// "/api/v1/photos"

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TestApp />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
