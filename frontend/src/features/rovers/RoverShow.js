import CamerasContainer from "../cameras/CamerasContainer";

import "./RoverShow.css";

const RoverShow = (props) => {
  return (
    <div className={`RoverShow${props.visible}`} id={`RoverShow-${props.id}`} onClick={props.onClick}>
      <CamerasContainer {...props} cameraids={props.cameras}/>
    </div>
  );
};

export default RoverShow;