import FetchResource from "../../common/FetchResource";
import { useState } from "react"; // useMemo,
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

  function mappedRovers() {
    if (rovers.data) {
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
  }

  // const displayDemRovs = useMemo(() => mappedRovers(), [rovers.data]);
  // https://react.dev/reference/react/useMemo

  // async function asyncCall() {
  // const result = await resolveAfter2Seconds();
  // }
  // await Promise.resolve('a');
  // function resolvedRovers() {
  //   return new Promise(resolve(rovers.data));
  // }

  return <div id="RoverList">{mappedRovers()}</div>;
}
