import {useDisplayToggle} from "../../common/Toggle";
import CameraButtonList from "../cameras/CameraButtonList";
import RoverCard from "./RoverCard";

export const RoverListItem = (props) => {
  const {cameras, display, id, onClick, style} = props;

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
      <RoverCard {...props} onClick={setLocalDisplay} roverid={id}/>
      <CameraButtonList {...props} cameraids={cameras} display={localDisplay}/>
    </div>
  );
};