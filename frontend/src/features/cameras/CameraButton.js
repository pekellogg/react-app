import {useToggle} from "../../common/useToggle";
import PhotoList from "../photos/PhotoList";

import "./CameraButton.css";

const CameraButton = (props) => {

  const [isShow, setIsShow] = useToggle();

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