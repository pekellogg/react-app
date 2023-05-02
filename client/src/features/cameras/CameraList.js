import useCameraContext from "./useCameraContext";

export default function CameraList() {
  const cameras = useCameraContext();

  return (
    <>
      {
        cameras.map(({ id, external_id, name, rover_id, full_name, created_at, updated_at }) => (
          <div key={id}>
            <p>id: { id }</p>
            <p>external_id: { external_id }</p>
            <p>name: { name }</p>
            <p>rover_id: { rover_id }</p>
            <p>full_name: { full_name }</p>
            <p>created_at: { created_at }</p>
            <p>updated_at: { updated_at }</p>
          </div>
        ))
      }
    </>
  );
};