import displayDate from "../../common/displayDate";
import { useBooleanToggle } from "../../common/Toggle";
import CameraButtonList from "../cameras/CameraButtonList";

import "./RoverCard.css";

export default function RoverCard({
  cameras,
  id,
  landingDate,
  launchDate,
  name,
  profilePic,
  roversVisibility,
  setRoversVisibility,
  status,
}) {
  const [camerasVisibility, setCamerasVisibility] = useBooleanToggle(false);

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
    setCamerasVisibility();
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
              src={profilePic}
            />
            <div>
              <p>Mission {status}</p>
              <p>Launched {displayDate(launchDate)}</p>
              <p>Landed {displayDate(landingDate)}</p>
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
