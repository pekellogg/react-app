// import PhotosContainer from "../photos/PhotosContainer";
import RoverPhotosContainer from "../photos/RoverPhotosContainer";

import "./Camera.css";

const Camera = (props) => {
  return (
    <>
      <button className={props.className} id={props.id} onClick={props.onClick}>
        { props.full_name }
      </button>
      <RoverPhotosContainer cameraid={props.id} photos={props.photos}/>
      {/* <PhotosContainer cameraid={props.id} photos={props.photos}/> */}
    </>
  );
};

export default Camera;