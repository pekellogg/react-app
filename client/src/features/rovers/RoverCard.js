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
  status,
}) {
  const [camerasVisibility, setCamerasVisibility] = useBooleanToggle(false);
  return (
    <>
      <div
        className="RoverCard"
        id={id}
        onClick={setCamerasVisibility}
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
  );
}
