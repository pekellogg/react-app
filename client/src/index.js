import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ResourceProvider from "./common/ResourceProvider";
import CameraContext from "./features/cameras/CameraContext";
import PhotoContext from "./features/photos/PhotoContext";
import RoverContext from "./features/rovers/RoverContext";
import App from "./app/App";

const queryClient = new QueryClient();

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ResourceProvider resource="/api/v1/cameras" resourceContext={CameraContext}>
        <ResourceProvider resource="/api/v1/photos" resourceContext={PhotoContext}>
          <ResourceProvider resource="/api/v1/rovers" resourceContext={RoverContext}>
            <App />
          </ResourceProvider>
        </ResourceProvider>
      </ResourceProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);