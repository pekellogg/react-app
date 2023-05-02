import { useDisplayToggle } from "../../common/Toggle";
import CameraButtonList from "../cameras/CameraButtonList";
import RoverCard from "./RoverCard";

export default function RoverListItem({ cameras, display, id, landing_date, launch_date, name, onClick, profile_pic, status, style }) {
  const [localDisplay, setLocalDisplay] = useDisplayToggle();

  return (
    <div
      className="RoverListItem"
      display={display}
      id={`RoverListItem-${id}`}
      onClick={onClick}
      style={style}
      roverid={id}
    >
      <RoverCard
        id={id}
        landingDate={landing_date}
        launchDate={launch_date}
        name={name}
        onClick={setLocalDisplay}
        profilePic={profile_pic}
        roverid={id}
        status={status}
      />
      <CameraButtonList
        cameras={cameras}
        display={localDisplay}
        id={id}
      />
    </div>
  );
};