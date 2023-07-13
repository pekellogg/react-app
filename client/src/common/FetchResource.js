import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function FetchResource(resource) {
  const resourceQuery = useQuery({
    queryKey: [resource],
    queryFn: fetchResource,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  async function fetchResource() {
    const response = await axios.get(resource);
    return response.data;
  }

  return resourceQuery;
}
