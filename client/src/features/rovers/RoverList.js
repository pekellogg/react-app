import useFetch from "../../common/useFetch";
import { useState } from "react";
import RoverCard from "./RoverCard";

import "./RoverList.css";

export default function RoverList() {
  const { loading, data, error } = useFetch("api/v1/rovers");

  const [roversVisibility, setRoversVisibility] = useState({
    Curiosity: true,
    Spirit: true,
    Opportunity: true,
    Perseverance: true,
  });

  if (loading) return `Loading...`;

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  return (
    <div id="RoverList">
      {data.map((rover) => (
        <RoverCard
          {...rover}
          id={`RoverCard-${rover.id}`}
          key={`RoverCard-${rover.id}`}
          setRoversVisibility={setRoversVisibility}
          roversVisibility={roversVisibility[rover.name]}
        />
      ))}
    </div>
  );
}
