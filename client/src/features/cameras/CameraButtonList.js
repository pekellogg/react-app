import CameraButton from "./CameraButton";

export default function CameraButtonList({ cameras, display, id }) {
  return (
    <div
      className="CameraButtonList"
      id={`CameraButtonList-${id}`}
      style={{ display: display }}
    >
      {cameras.map((c) => (
        <CameraButton
          {...c}
          key={c.id}
          style={{ display: display }}
        />
      ))}
    </div>
  );
}
