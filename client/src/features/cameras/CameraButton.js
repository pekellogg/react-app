import { useState } from "react";
import PhotoList from "../photos/PhotoList";

import "./CameraButton.css";

export default function CameraButton({ id, full_name }) {
  const [displayPhotos, setDisplayPhotos] = useState(false);

  function handleClick(e) {
    setDisplayPhotos(!displayPhotos);
  }

  return (
    <>
      <button
        className="CameraButton"
        id={`CameraButton-${id}`}
        onClick={handleClick}
        style={
          displayPhotos
            ? { backgroundColor: "#ed8f45" }
            : { backgroundColor: "" }
        }
      >
        {!displayPhotos ? full_name : "Hide Photos"}
      </button>
      {displayPhotos && <PhotoList />}
    </>
  );
}
