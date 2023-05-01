import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query"; // useMutation, useQueryClient
import RoverContext from "./RoverContext";

export const RoverProvider = ({ children }) => {
  const roversQuery = useQuery({
    queryKey: ["rovers"],
    queryFn: fetchRovers,
  })

  // display loading state
  if (roversQuery.isLoading) return <h1>Loading...</h1>;

  // display error state
  if (roversQuery.isError) {
    return (
      <pre>
        { JSON.stringify(roversQuery.error) }
      </pre>
    );
  }

  return (
    <>
      <RoverContext.Provider value={roversQuery.data}>
        { children }
      </RoverContext.Provider>
    </>
  );
}

function fetchRovers() {
  return (
    axios
      .get("/rovers")
      .then((response) => response.data)
  );
}