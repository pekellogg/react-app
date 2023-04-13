import {useDisplayToggle} from "../../common/Toggle";
import PhotoList from "../photos/PhotoList";

import "./CameraButton.css";

const CameraButton = (props) => {

  const [display, setDisplay] = useDisplayToggle();

  return (
    <>
      <button className="CameraButton" id={`CameraButton-${props.id}`} onClick={setDisplay}>
        {props.full_name}
      </button>
      <PhotoList cameraphotos={props.photos} display={display}/>
    </>
  );
};

export default CameraButton;