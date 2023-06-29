import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function ResourceProvider({
  children,
  resource,
  resourceContext: ResourceContext,
}) {
  const resourceQuery = useQuery({
    queryKey: [resource],
    queryFn: fetchResource,
  });

  function fetchResource() {
    return axios.get(resource).then((response) => response.data);
  }

  if (resourceQuery.isLoading) return <h1>Loading...</h1>;

  if (resourceQuery.isError)
    return <pre>{JSON.stringify(resourceQuery.error)}</pre>;

  return (
    <>
      <ResourceContext.Provider value={resourceQuery.data}>
        {children}
        <pre>{JSON.stringify(resourceQuery.data)}</pre>
      </ResourceContext.Provider>
    </>
  );
}
