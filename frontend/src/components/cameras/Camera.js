import RoverPhotosContainer from "../photos/RoverPhotosContainer";
import Button from "../../ui/Button";
import "./Camera.css";

const Camera = (props) => {
  return (
    <>
      <Button className={"CameraButton"} id={`CameraButton-${props.id}`}> {/* onClick={props.onClick}*/}
        { props.full_name }
      </Button>
      <RoverPhotosContainer cameraid={props.id} photos={props.photos}/>
    </>
  )
};

export default Camera;