import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query"; // useMutation, useQueryClient

export default function ResourceProvider({ children, resource, resourceContext: ResourceContext }) {
  const resourceQuery = useQuery({
    queryKey: [resource],
    queryFn: fetchResource,
  })

  function fetchResource() {
    return (
      axios
        .get(resource)
        .then((response) => response.data)
    );
  }

  switch(resourceQuery) {
    // display loading state
    case resourceQuery.isLoading:
      return (
        <h1>Loading...</h1>
      );
    // display error state
    case resourceQuery.isError:
      return (
        <pre>
          { JSON.stringify(resourceQuery.error) }
        </pre>
      );
    default:
      return (
        <>
          <ResourceContext.Provider value={resourceQuery.data}>
            { children }
          </ResourceContext.Provider>
        </>
      );
  }
}