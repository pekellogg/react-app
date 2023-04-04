import PhotosContainer from "../photos/PhotosContainer";

import "./Camera.css";

const Camera = (props) => {
  return (
    <>
      <button className={props.className} id={props.id} onClick={props.onClick}>
        { props.full_name }
      </button>
      <PhotosContainer cameraid={props.id} photos={props.photos}/>
    </>
  );
};

export default Camera;