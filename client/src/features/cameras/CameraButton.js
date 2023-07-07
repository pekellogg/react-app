import { useDisplayToggle } from "../../common/Toggle";
import PhotoList from "../photos/PhotoList";

import "./CameraButton.css";

export default function CameraButton({ id, full_name, style }) {
  const [display, setDisplay] = useDisplayToggle();

  const handleClick = (e) => {
    e.currentTarget.style.backgroundColor === ""
      ? (e.currentTarget.style.backgroundColor = "#ed8f45")
      : (e.currentTarget.style.backgroundColor = "");
    e.currentTarget.textContent !== "Hide Photos"
      ? (e.currentTarget.textContent = "Hide Photos")
      : (e.currentTarget.textContent = full_name);
    setDisplay();
  };

  return (
    <>
      <button
        className="CameraButton"
        id={`CameraButton-${id}`}
        onClick={handleClick}
        style={style}
        type="button"
      >
        {full_name}
      </button>
      <PhotoList display={display} />
    </>
  );
}
