import { useState } from "react";
import PhotoList from "../photos/PhotoList";

import "./CameraButton.css";

export default function CameraButton({ id, full_name }) {
  const [display, setDisplay] = useState(false);

  function handleClick(e) {
    e.currentTarget.style.backgroundColor === ""
      ? (e.currentTarget.style.backgroundColor = "#ed8f45")
      : (e.currentTarget.style.backgroundColor = "");
    e.currentTarget.textContent !== "Hide Photos"
      ? (e.currentTarget.textContent = "Hide Photos")
      : (e.currentTarget.textContent = full_name);
    setDisplay(!display);
  }

  return (
    <>
      <button
        className="CameraButton"
        id={`CameraButton-${id}`}
        onClick={handleClick}
        type="button"
      >
        {full_name}
      </button>
      {display && <PhotoList />}
    </>
  );
}
