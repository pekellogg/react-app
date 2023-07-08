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
      return rovers.data.map(
        ({
          cameras,
          id,
          landing_date,
          launch_date,
          name,
          profile_pic,
          status,
        }) => (
          <RoverCard
            cameras={cameras}
            id={`RoverCard-${id}`}
            key={`RoverCard-${id}`}
            landingDate={landing_date}
            launchDate={launch_date}
            name={name}
            profilePic={profile_pic}
            setRoversVisibility={setRoversVisibility}
            status={status}
            roversVisibility={roversVisibility[name]}
          />
        )
      );
  }

  return <div id="RoverList">{displayRovers()}</div>;
}
