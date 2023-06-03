import { usePhotoContext } from "./usePhotoContext";
import Photo from "./Photo";

export default function PhotoList({ display }) {
  const photos = usePhotoContext();

  const displayAllPhotos = () => photos.map((photo) => (
    <Photo source={photo.source} key={photo.id} />
  ));

  return (
    <div className="PhotoList" style={{ display: display }}>
      { displayAllPhotos() }
    </div>
  );
};