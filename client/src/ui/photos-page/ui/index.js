import useFetch from "../../../data/useFetch";
import Photo from "../../shared/Photo";

export default function PhotosPage() {
  const request = useFetch(`/api/v1/photos`);

  if (request.loading) return `Loading...`;

  if (request.error) {
    return <pre>{JSON.stringify(request.error, null, 2)}</pre>;
  }

  return (
    <div className="Photos">
      {request.data.map((photo) => (
        <Photo
          key={photo.id}
          {...photo}
          source={photo.source}
        />
      ))}
    </div>
  );
}
