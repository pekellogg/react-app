// import { useState } from "react";
// import { useDataContext } from "../../shared/DataContextProvider";
// import Photo from "../shared/Photo";
// import "./CameraButton.css";

// export default function CameraButton(camera) {
//   const { photos } = useDataContext();
//   const [displayPhotos, setDisplayPhotos] = useState(false);
//   const [camPhotos] = useState(mappedPhotos(camera.id));

//   // handle loading state
//   if (photos.loading) return `Loading...`;

//   // handle error state
//   if (photos.error) {
//     return <pre>{JSON.stringify(photos.error, null, 2)}</pre>;
//   }

//   const handleClick = (e) => setDisplayPhotos((prevState) => !prevState);

//   function mappedPhotos(cameraId) {
//     return photos.data.filter((photo) => photo.camera_id === cameraId);
//   }

//   return (
//     <>
//       <button
//         className="CameraButton"
//         id={`CameraButton-${camera.id}`}
//         onClick={handleClick}
//         style={
//           displayPhotos
//             ? { backgroundColor: "#ed8f45" }
//             : { backgroundColor: "" }
//         }
//       >
//         {!displayPhotos ? camera.full_name : "Hide Photos"}
//       </button>
//       {displayPhotos && (
//         <div
//           className={`CameraButton${camera.id}-PhotoList`}
//           key={`CameraButton${camera.id}-PhotoList`}
//         >
//           {camPhotos.length === 0 ? (
//             <div>No photos!</div>
//           ) : (
//             camPhotos.map((photo) => (
//               <Photo
//                 {...photo}
//                 key={photo.id}
//                 source={photo.source}
//               />
//             ))
//           )}
//         </div>
//       )}
//     </>
//   );
// }
import useFetch from "../../data/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import Photo from "../shared/Photo";
import "./CameraButton.css";

export default function CameraButton(camera) {
  // grab id from React Router params for fetch
  const { id } = useParams();

  const request = useFetch(`/api/v1/cameras/${id}`);

  // create navigate hook to return to /rovers/:id
  const navigate = useNavigate();

  // handle loading state
  if (request.loading) return `Loading...`;

  // handle error state
  if (request.error) {
    return <pre>{JSON.stringify(request.error, null, 2)}</pre>;
  }

  // pull out properties of camera
  const { full_name, name, rover_id, photos } = request.data;

  // return to /rovers
  function handleClick() {
    navigate("/rovers/:id");
  }

  return (
    <button
      className="CameraButton"
      id={`CameraButton-${id}`}
      onClick={handleClick}
    >
      {full_name}
    </button>
  );
}
