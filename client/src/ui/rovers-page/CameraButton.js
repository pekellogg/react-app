import { useState } from "react";
import { useDataContext } from "../../shared/DataContextProvider";
import Photo from "../shared/Photo";
import "./CameraButton.css";

export default function CameraButton(camera) {
  const { photos } = useDataContext();
  const [displayPhotos, setDisplayPhotos] = useState(false);
  const [camPhotos] = useState(mappedPhotos(camera.id));

  // handle loading state
  if (photos.loading) return `Loading...`;

  // handle error state
  if (photos.error) {
    return <pre>{JSON.stringify(photos.error, null, 2)}</pre>;
  }

  const handleClick = (e) => setDisplayPhotos((prevState) => !prevState);

  function mappedPhotos(cameraId) {
    return photos.data.filter((photo) => photo.camera_id === cameraId);
  }

  return (
    <>
      <button
        className="CameraButton"
        id={`CameraButton-${camera.id}`}
        onClick={handleClick}
        style={
          displayPhotos
            ? { backgroundColor: "#ed8f45" }
            : { backgroundColor: "" }
        }
      >
        {!displayPhotos ? camera.full_name : "Hide Photos"}
      </button>
      {displayPhotos && (
        <div
          className={`CameraButton${camera.id}-PhotoList`}
          key={`CameraButton${camera.id}-PhotoList`}
        >
          {camPhotos.length === 0 ? (
            <div>No photos!</div>
          ) : (
            camPhotos.map((photo) => (
              <Photo
                {...photo}
                key={photo.id}
                source={photo.source}
              />
            ))
          )}
        </div>
      )}
    </>
  );
}
