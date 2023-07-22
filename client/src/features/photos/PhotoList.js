import useFetch from "../../common/useFetch";
import Photo from "./Photo";

export default function PhotoList(props) {
  const { loading, data, error } = useFetch("/api/v1/photos");

  if (loading) return `Loading...`;

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  return data.map((photo) => (
    <div key={photo.id}>
      <Photo
        {...photo}
        source={photo.source}
      />
    </div>
  ));
}
