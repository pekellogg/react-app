import CamerasContainer from "../cameras/CamerasContainer";

import "./RoverShow.css";

const RoverShow = (props) => {
  return (
    <div className={`RoverShow${props.visible}`} id={`RoverShow-${props.id}`}>
      <CamerasContainer { ...props }/>
    </div>
  )
};

export default RoverShow;