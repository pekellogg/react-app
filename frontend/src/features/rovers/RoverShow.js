import CamerasContainer from "../cameras/CamerasContainer";
import {capitalizeWord} from "../../common/capitalizeWord";

import "./RoverShow.css";

const RoverShow = (props) => {
  return (
    <div className={`RoverShow${capitalizeWord(props.visible)}`} id={`RoverShow-${props.id}`} onClick={props.onClick}>
      <CamerasContainer {...props} cameraids={props.cameras}/>
    </div>
  );
};

export default RoverShow;