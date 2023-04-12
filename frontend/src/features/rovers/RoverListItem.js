import {RoverContext} from "../../common/RoverContext";
import {useVisibilityToggle} from "../../common/Toggle";
import CameraButtonList from "../cameras/CameraButtonList";
import RoverCard from "./RoverCard";

export const RoverListItem = (props) => {

  const [visibility, setVisibility] = useVisibilityToggle();

  return (
    <div className="RoverListItem" id={`RoverListItem-${props.id}`}>
      <RoverContext.Provider key={props.id} value={props.id}>
        <RoverCard {...props} onClick={setVisibility}/>
        <CameraButtonList {...props} cameraids={props.cameras} visibility={visibility}/>
      </RoverContext.Provider>
    </div>
  );
};