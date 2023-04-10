import PhotosContainer from "../photos/PhotosContainer";

import "./Camera.css";

const Camera = (props) => {
  return (
    <div className="Camera" id={props.id}>
      <button className="CameraButton" id={`CameraButton-${props.id}`}>
        {props.full_name}
      </button>
      <PhotosContainer cameraphotos={props.photos}/>
    </div>
  );
};

export default Camera;