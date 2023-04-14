import {useDisplayToggle} from "../../common/Toggle";
import PhotoList from "../photos/PhotoList";

import "./CameraButton.css";

const CameraButton = (props) => {

  const [display, setDisplay] = useDisplayToggle();

  const handleClick = (e) => {
    // hide siblings
    e.currentTarget.style.backgroundColor === "" ? e.currentTarget.style.backgroundColor = "#ed8f45" : e.currentTarget.style.backgroundColor = ""
    e.currentTarget.textContent !== "Hide Photos" ? e.currentTarget.textContent = "Hide Photos" : e.currentTarget.textContent = props.full_name
    setDisplay();
  };

  return (
    <>
      <button className="CameraButton" id={`CameraButton-${props.id}`} onClick={handleClick} style={props.style}>
        {props.full_name}
      </button>
      <PhotoList cameraphotos={props.photos} display={display}/>
    </>
  );
};

export default CameraButton;