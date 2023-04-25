import {connect} from "react-redux";
import CameraButton from "./CameraButton";

const CameraButtonList = (props) => {
  const {cameras, cameraids, display, id, loading} = props;

  const loadingOrCameras = () => {
    return loading ? "Loading..." : filteredCameras()
  };
  
  const filteredCameras = () => cameras.filter((camera) => cameraids.includes(camera.id.toString()));
  
  const filteredMappedCameras = () => loadingOrCameras().map((c) => ({...c}));

  const displayRoverCamerasList = () => filteredMappedCameras().map((c) => <CameraButton {...c} key={c.id} style={{display: display}}/>);

  return (
    <div className="CameraButtonList" id={`CameraButtonList-${id}`} style={{display: display}}>
      {displayRoverCamerasList()}
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