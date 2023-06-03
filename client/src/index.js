import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ResourceProvider from "./common/ResourceProvider";
import CameraContext from "./features/cameras/CameraContext";
import { photoContext } from "./features/photos/usePhotoContext";
import { roverContext } from "./features/rovers/useRoverContext";
import App from "./app/App";

const queryClient = new QueryClient();

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ResourceProvider resource="/api/v1/cameras" resourceContext={CameraContext}>
        <ResourceProvider resource="/api/v1/photos" resourceContext={photoContext}>
          <ResourceProvider resource="/api/v1/rovers" resourceContext={roverContext}>
            <App />
          </ResourceProvider>
        </ResourceProvider>
      </ResourceProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);