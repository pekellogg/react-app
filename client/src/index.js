import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CameraProvider from "./features/cameras/CameraProvider";
import PhotoProvider from "./features/photos/PhotoProvider";
import RoverProvider from "./features/rovers/RoverProvider";
import App from "./app/App";

const queryClient = new QueryClient();

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CameraProvider>
        <PhotoProvider>
          <RoverProvider>
            <App />
          </RoverProvider>
        </PhotoProvider>
      </CameraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);