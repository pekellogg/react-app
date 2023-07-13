import useFetch from "../../common/useFetch";
import Photo from "./Photo";

export default function PhotoList(props) {
  const { loading, data, error } = useFetch("/api/v1/photos");

  // Render context: Rovers page
  if (props.photos) {
    if (props.photos.length === 0) {
      return <div>No photos!</div>;
    } else {
      return props.photos.map((photo) => {
        return (
          <div key={photo.id}>
            <Photo
              {...photo}
              source={photo.source}
            />
          </div>
        );
      });
    }
    // Render context: Photos page
  } else {
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
}
