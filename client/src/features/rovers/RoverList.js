import FetchResource from "../../common/FetchResource";
import { useState } from "react";
import RoverCard from "./RoverCard";

import "./RoverList.css";

export default function RoverList() {
  const rovers = FetchResource("/api/v1/rovers");

  const [roversVisibility, setRoversVisibility] = useState({
    Curiosity: true,
    Spirit: true,
    Opportunity: true,
    Perseverance: true,
  });

  if (rovers.isLoading) return <h1>Loading...</h1>;

  if (rovers.isError) return <pre>{JSON.stringify(rovers.error)}</pre>;

  function displayRovers() {
    if (rovers.data)
      return rovers.data.map((rover) => (
        <RoverCard
          {...rover}
          id={`RoverCard-${rover.id}`}
          key={`RoverCard-${rover.id}`}
          setRoversVisibility={setRoversVisibility}
          roversVisibility={roversVisibility[rover.name]}
        />
      ));
  }

  return <div id="RoverList">{displayRovers()}</div>;
}
