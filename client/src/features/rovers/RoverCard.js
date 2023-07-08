import displayDate from "../../common/displayDate";
import { useState } from "react";
import CameraButtonList from "../cameras/CameraButtonList";

import "./RoverCard.css";

export default function RoverCard({
  cameras,
  id,
  landing_date,
  launch_date,
  name,
  profile_pic,
  roversVisibility,
  setRoversVisibility,
  status,
}) {
  const [camerasVisibility, setCamerasVisibility] = useState(false);

  function handleClick(event) {
    setRoversVisibility((prevState) => {
      const newState = {};
      for (const rover in prevState) {
        rover !== name
          ? (newState[rover] = !prevState[rover])
          : (newState[rover] = prevState[rover]);
      }
      return newState;
    });
    setCamerasVisibility(!camerasVisibility);
  }

  return (
    <>
      {roversVisibility ? (
        <>
          <div
            className="RoverCard"
            id={id}
            onClick={handleClick}
          >
            <h1>{name}</h1>
            <img
              alt={`Mars rover, ${name}`}
              className="RoverCard"
              src={profile_pic}
            />
            <div>
              <p>Mission {status}</p>
              <p>Launched {displayDate(launch_date)}</p>
              <p>Landed {displayDate(landing_date)}</p>
            </div>
          </div>
          <CameraButtonList
            key={`CameraButtonList-${id}`}
            cameras={cameras}
            isVisible={camerasVisibility}
            id={id}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
}
