import {connect} from "react-redux";
import CameraButton from "./CameraButton";

const CameraButtonList = (props) => {

  const loadingOrCameras = () => {
    return props.loading ? "Loading..." : filteredCameras()
  }

  const filteredCameras = () => props.cameras.filter((camera) => props.cameraids.includes(camera.id.toString()));

  const mapCamerasToRover = () => loadingOrCameras().map((camera) => <CameraButton {...camera} key={camera.id} style={{display: props.display}}/>);

  return (
    <div className="CameraButtonList" id={`CameraButtonList-${props.id}`} style={{display: props.display}}>
      {mapCamerasToRover()}
    </div>
  );

};

const mapStateToProps = (state) => {
  const collectCameras = [];
  Object.values(state.cameras.byId).forEach((camera) => {
    if (camera.photos.length > 0) {
      collectCameras.push(camera);
    }
  });
  return {cameras: collectCameras.flat()};
};

export default connect(mapStateToProps)(CameraButtonList);