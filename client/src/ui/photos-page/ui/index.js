import { useDataContext } from "../../../shared/DataContextProvider";
import Photo from "../../shared/Photo";

export default function PhotosPage() {
  const { photos } = useDataContext();

  if (photos.loading) return `Loading...`;

  if (photos.error) {
    return <pre>{JSON.stringify(photos.error, null, 2)}</pre>;
  }

  return photos.data.map((photo) => (
    <div key={photo.id}>
      <Photo
        {...photo}
        source={photo.source}
      />
    </div>
  ));
}
