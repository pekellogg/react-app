import {useBooleanToggle} from "../../common/Toggle";
import PhotoList from "../photos/PhotoList";

import "./CameraButton.css";

const CameraButton = (props) => {

  const [isShow, setIsShow] = useBooleanToggle();

  return (
    <>
      <button className="CameraButton" id={`CameraButton-${props.id}`} onClick={setIsShow}>
        {props.full_name}
      </button>
      <PhotoList cameraphotos={props.photos} className={isShow ? "" : "DisplayFalse"}/>
    </>
  );
};

export default CameraButton;