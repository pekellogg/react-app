import {RoverContext} from "../../common/RoverContext";
import {useDisplayToggle} from "../../common/Toggle";
import CameraButtonList from "../cameras/CameraButtonList";
import RoverCard from "./RoverCard";

export const RoverListItem = (props) => {

  const [display, setDisplay] = useDisplayToggle();

  return (
    <div className="RoverListItem" id={`RoverListItem-${props.id}`}>
      <RoverContext.Provider key={props.id} value={props.id}>
        <RoverCard {...props} onClick={setDisplay}/>
        <CameraButtonList {...props} cameraids={props.cameras} display={display}/>
      </RoverContext.Provider>
    </div>
  );
};