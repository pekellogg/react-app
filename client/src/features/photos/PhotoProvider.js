import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query"; // useMutation, useQueryClient
import PhotoContext from "./PhotoContext";

export const PhotoProvider = ({ children }) => {
  const photosQuery = useQuery({
    queryKey: ["photos"],
    queryFn: fetchPhotos,
  })

  // display loading state
  if (photosQuery.isLoading) return <h1>Loading...</h1>;

  // display error state
  if (photosQuery.isError) {
    return (
      <pre>
        { JSON.stringify(photosQuery.error) }
      </pre>
    );
  }

  return (
    <>
      <PhotoContext.Provider value={photosQuery.data}>
        { children }
      </PhotoContext.Provider>
    </>
  );
}

function fetchPhotos() {
  return (
    axios
      .get("/photos")
      .then((response) => response.data)
  );
}