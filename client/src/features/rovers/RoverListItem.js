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
  const [camerasDisplay, setCamerasDisplay] = useDisplayToggle();

  return (
    <>
      <RoverCard
        id={id}
        landingDate={landing_date}
        launchDate={launch_date}
        name={name}
        onClick={setCamerasDisplay}
        profilePic={profile_pic}
        status={status}
      />
      <CameraButtonList
        cameras={cameras}
        display={camerasDisplay}
        id={id}
      />
    </>
  );
}
