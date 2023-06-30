import FetchResource from "../../common/FetchResource";
import Photo from "./Photo";

export default function PhotoList({ display }) {
  const photos = FetchResource("/api/v1/photos");

  function displayAllPhotos() {
    if (photos.data) {
      return photos.data.map((photo) => (
        <Photo
          source={photo.source}
          key={photo.id}
        />
      ));
    }
  }

  if (photos.isLoading) return <h1>Loading...</h1>;

  if (photos.isError) return <pre>{JSON.stringify(photos.error)}</pre>;

  return (
    <div
      className="PhotoList"
      style={{ display: display }}
    >
      {displayAllPhotos()}
    </div>
  );
}
