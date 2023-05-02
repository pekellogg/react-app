import { useDisplayToggle } from "../../common/Toggle";
import PhotoList from "../photos/PhotoList";

import "./CameraButton.css";

export default function CameraButton({ id, full_name, photos, style }) {
  const [display, setDisplay] = useDisplayToggle();

  const handleClick = (e) => {
    e.currentTarget.style.backgroundColor === "" ? e.currentTarget.style.backgroundColor = "#ed8f45" : e.currentTarget.style.backgroundColor = ""
    e.currentTarget.textContent !== "Hide Photos" ? e.currentTarget.textContent = "Hide Photos" : e.currentTarget.textContent = full_name
    setDisplay();
  };

  return (
    <>
      <button className="CameraButton" id={`CameraButton-${id}`} onClick={handleClick} style={style}>
        { full_name }
      </button>
      <PhotoList cameraphotos={photos} display={display} />
    </>
  );
};