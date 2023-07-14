import CameraButton from "./CameraButton";

import "./CameraButtonList.css";

export default function CameraButtonList({ cameras, id }) {
  return (
    <div
      className="CameraButtonList"
      id={`CameraButtonList-${id}`}
    >
      {cameras.map((c) => (
        <CameraButton
          {...c}
          key={c.id}
        />
      ))}
    </div>
  );
}
