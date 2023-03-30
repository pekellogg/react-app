import RoverPhotosContainer from "../photos/RoverPhotosContainer";

import "./Camera.css";

const Camera = (props) => {
  return (
    <div className="CameraContainer" id={`CameraContainer-${props.id}`} key={props.id} >
      <button className={"CameraButton"} onClick={props.onClick}>
        {props.full_name}
      </button>
      <RoverPhotosContainer cameraid={props.id} photos={props.photos}/>
    </div>
  )
};

export default Camera;