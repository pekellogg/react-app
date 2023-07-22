import useFetch from "../../common/useFetch";
import { useState } from "react";
import RoverCard from "./RoverCard";
import CameraButton from "../cameras/CameraButton";

import "./RoverList.css";

export default function RoverList() {
  const rovers = useFetch("api/v1/rovers");

  const [roversVisibility, setRoversVisibility] = useState({
    Curiosity: {
      isVisible: true,
      camerasVisible: false,
    },
    Spirit: {
      isVisible: true,
      camerasVisible: false,
    },
    Opportunity: {
      isVisible: true,
      camerasVisible: false,
    },
    Perseverance: {
      isVisible: true,
      camerasVisible: false,
    },
  });

  if (rovers.loading) return `Loading...`;

  if (rovers.error) {
    return <pre>{JSON.stringify(rovers.error, null, 2)}</pre>;
  }

  function handleClick(event) {
    const roverName = event.target.parentElement.attributes.name.value;
    setRoversVisibility((prevState) => {
      const newState = {};
      for (const rover in prevState) {
        // if rover was not clicked hide it
        if (rover !== roverName) {
          newState[`${rover}`] = {
            isVisible: !prevState[rover].isVisible,
            camerasVisible: prevState[rover].camerasVisible,
          };
          // if rover was clicked, keep it visible and show its cameras
        } else {
          newState[`${rover}`] = {
            isVisible: prevState[rover].isVisible,
            camerasVisible: !prevState[rover].camerasVisible,
          };
        }
      }
      return newState;
    });
  }

  return (
    <div id="RoverList">
      {rovers.data.map((rover) => [
        <RoverCard
          {...rover}
          id={`RoverCard-${rover.id}`}
          key={`RoverCard-${rover.id}`}
          onClick={handleClick}
          setRoversVisibility={setRoversVisibility}
          roversVisibility={roversVisibility[rover.name].isVisible}
        />,
        roversVisibility[rover.name].camerasVisible && (
          <div
            className="CameraButtonList"
            key={rover.id}
            id={`CameraButtonList-${rover.id}`}
          >
            {rover.cameras.map((c) => (
              <CameraButton
                {...c}
                key={c.id}
              />
            ))}
          </div>
        ),
      ])}
    </div>
  );
}
