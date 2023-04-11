import PhotosContainer from "../photos/PhotosContainer";
import {useToggle} from "../../common/useToggle";

import "./Camera.css";

const Camera = (props) => {

  const [isShow, setIsShow] = useToggle();

  return (
    <div className="Camera" id={props.id}>
      <button className="CameraButton" id={`CameraButton-${props.id}`} onClick={setIsShow}>
        {props.full_name}
      </button>
      <PhotosContainer cameraphotos={props.photos} className={isShow ? "" : "DisplayFalse"}/>
    </div>
  );
};

export default Camera;