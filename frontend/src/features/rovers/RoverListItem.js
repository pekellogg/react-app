import {RoverContext} from "../../common/RoverContext";
import {useDisplayToggle} from "../../common/Toggle";
import CameraButtonList from "../cameras/CameraButtonList";
import RoverCard from "./RoverCard";

export const RoverListItem = (props) => {

  const [display, setDisplay] = useDisplayToggle();

  return (
    <RoverContext.Provider key={props.id} value={props.id}>
      {console.log(`${props.id} ${props.style.display}`)}
      <div className="RoverListItem" display={props.display} id={`RoverListItem-${props.id}`} onClick={props.onClick}> {/* style={props.style} */}
        <RoverCard {...props} onClick={setDisplay}/>
        <CameraButtonList {...props} cameraids={props.cameras} display={display}/>
      </div>
    </RoverContext.Provider>
  );
};