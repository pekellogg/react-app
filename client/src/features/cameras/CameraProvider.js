import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query"; // useMutation, useQueryClient
import CameraContext from "./CameraContext";

export const CameraProvider = ({ children }) => {

  const camerasQuery = useQuery({
    queryKey: ["cameras"],
    queryFn: fetchCameras,
  })

  // display loading state
  if (camerasQuery.isLoading) return <h1>Loading...</h1>;

  // display error state
  if (camerasQuery.isError) {
    return (
      <pre>
        { JSON.stringify(camerasQuery.error) }
      </pre>
    );
  }

    return (
      <>
        <CameraContext.Provider value={camerasQuery.data}>
          { children }
        </CameraContext.Provider>
      </>
    );
  
  }

function fetchCameras() {
  return (
    axios
      .get("/cameras")
      .then((response) => response.data)
  );
}