import { usePhotoContext } from "./usePhotoContext";

const TestPhotoList = () => {
  const photos = usePhotoContext();

  return (
    <>
      {
        photos.map(({ id, external_id, sol, source, rover_id, created_at, updated_at, camera_id }) => (
          <div key={id}>
            <p>id: { id }</p>
            <p>external_id: { external_id }</p>
            {/* <p>earth_date: { earth_date }</p> */}
            <p>sol: { sol }</p>
            <p>source: { source }</p>
            <p>rover_id: { rover_id }</p>
            <p>created_at: { created_at }</p>
            <p>updated_at: { updated_at }</p>
            <p>camera_id: { camera_id }</p>
          </div>
        ))
      }
    </>
  );
};

export default TestPhotoList;