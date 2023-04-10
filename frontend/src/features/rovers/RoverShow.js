import CamerasContainer from "../cameras/CamerasContainer";

import "./RoverShow.css";

const RoverShow = (props) => {
  return (
    <div className="RoverShow" id={`RoverShow-${props.id}`} onClick={props.onClick}>
      {console.log(`props.visible: ${props.visible}`)}
      <CamerasContainer {...props} cameraids={props.cameras}/>
    </div>
  );
};

export default RoverShow;