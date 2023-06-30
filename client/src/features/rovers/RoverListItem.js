import { useDisplayToggle } from "../../common/Toggle";
import CameraButtonList from "../cameras/CameraButtonList";
import RoverCard from "./RoverCard";

export default function RoverListItem({
  cameras,
  id,
  landing_date,
  launch_date,
  name,
  profile_pic,
  status,
  style,
}) {
  const [localDisplay, setLocalDisplay] = useDisplayToggle();

  return (
    <div
      className="RoverListItem"
      id={`RoverListItem-${id}`}
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
}
