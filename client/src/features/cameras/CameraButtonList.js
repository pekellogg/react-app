import CameraButton from "./CameraButton";

import "./CameraButtonList.css";

export default function CameraButtonList({ cameras, id, isVisible }) {
  return (
    <div
      className="CameraButtonList"
      id={`CameraButtonList-${id}`}
    >
      {isVisible &&
        cameras.map((c) => (
          <CameraButton
            {...c}
            key={c.id}
          />
        ))}
    </div>
  );
}
