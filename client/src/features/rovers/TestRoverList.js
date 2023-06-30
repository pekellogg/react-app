import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useRoverContext } from "./useRoverContext";
import { useState } from "react";
import RoverListItem from "./RoverListItem";

import "./RoverList.css";

export default function RoverList() {
  const rovers = useRoverContext();

  // onClick toggle options:
  // 1. RoverCard "index" view: all showing
  // 2. Click RoverCard to reveal its cameras, hiding all other RoverCards
  const handleClick = (e) => {
    // investigate CameraButton 'wiring' to RoverList
    if (e.target.attributes.class.value === "RoverCard") {
      const roverId = e.target.attributes.roverid.value;
      setLocalRovers((prevLocalRovers) =>
        prevLocalRovers.map((r) => {
          if (r.id.toString() === roverId) return { ...r };
          if (r.style.display === "block") {
            return { ...r, style: { display: "none" } };
          } else {
            return { ...r, style: { display: "block" } };
          }
        })
      );
    }
  };

  const [localRovers, setLocalRovers] = useState(
    rovers.map((r) => ({
      ...r,
      onClick: handleClick,
      style: { display: "block" },
    }))
  );

  const displayRovers = () => {
    return localRovers.map((r) => (
      <RoverListItem
        {...r}
        key={r.id}
        onClick={r.onClick}
        style={r.style}
      />
    ));
  };

  return <div id="RoverList">{displayRovers()}</div>;
}

function ResourceProvider({
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
      <pre>{JSON.stringify(resourceQuery.data)}</pre>
    </>
  );
}
