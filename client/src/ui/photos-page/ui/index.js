import useFetch from "../../../data/useFetch";
import Photo from "../../shared/Photo";

export default function PhotosPage() {
  const request = useFetch(`/api/v1/photos`);

  if (request.loading) return `Loading...`;

  if (request.error) {
    return <pre>{JSON.stringify(request.error, null, 2)}</pre>;
  }

  return request.data.map((photo) => (
    <div key={photo.id}>
      <Photo
        {...photo}
        source={photo.source}
      />
    </div>
  ));
}
