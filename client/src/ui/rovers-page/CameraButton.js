import useFetch from "../../data/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import Photo from "../shared/Photo";

export default function CameraButton() {
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
  const { rover_id, photos } = request.data;

  // return to /rovers
  function handleClick() {
    navigate(`/rovers/${rover_id}/cameras`);
  }

  return (
    <div className="RoverCard-Camera-Photos">
      <button
        style={{ width: "100%" }}
        onClick={handleClick}
      >
        BACK
      </button>

      <div className="Photos">
        {photos.map((p) => (
          <Photo
            key={p.id}
            {...p}
          />
        ))}
      </div>
    </div>
  );
}
