import {useDisplayToggle} from "../../common/Toggle";
import CameraButtonList from "../cameras/CameraButtonList";
import RoverCard from "./RoverCard";

export const RoverListItem = (props) => {
  const [display, setDisplay] = useDisplayToggle();

  return (
    <div
      className="RoverListItem"
      display={props.display}
      id={`RoverListItem-${props.id}`}
      onClick={props.onClick}
      style={props.style}
      roverid={props.id}
    >
      <RoverCard {...props} onClick={setDisplay}/>
      <CameraButtonList {...props} cameraids={props.cameras} display={display}/>
    </div>
  );
};