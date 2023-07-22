import { useState } from "react";
import useFetch from "../../common/useFetch";
import PhotoList from "../photos/PhotoList";

import "./CameraButton.css";

export default function CameraButton({ id, full_name }) {
  const { loading, data, error } = useFetch(`api/v1/cameras/${id}`);
  const [displayPhotos, setDisplayPhotos] = useState(false);

  function handleClick(e) {
    setDisplayPhotos((prevState) => !prevState);
  }

  if (loading) return `Loading...`;

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
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
      {displayPhotos && (
        <div
          className={`CameraButton${id}-PhotoList`}
          key={`CameraButton${id}-PhotoList`}
        >
          <PhotoList photos={data.photos} />
        </div>
      )}
    </>
  );
}
