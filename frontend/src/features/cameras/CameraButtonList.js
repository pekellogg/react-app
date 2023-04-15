import {connect} from "react-redux";
import {useState} from "react";
import CameraButton from "./CameraButton";

const CameraButtonList = (props) => {

  const loadingOrCameras = () => {
    return props.loading ? "Loading..." : filteredCameras()
  };
  
  const filteredCameras = () => props.cameras.filter((camera) => props.cameraids.includes(camera.id.toString()));
  
  const filteredMappedCameras = () => loadingOrCameras().map((c) => ({...c}));
  
  const [cameras, setCameras] = useState(filteredMappedCameras().map((c) => ({...c})));

  const displayRoverCamerasList = () => cameras.map((c) => <CameraButton {...c} key={c.id} style={{display: props.display}}/>);

  return (
    <div className="CameraButtonList" id={`CameraButtonList-${props.id}`} style={{display: props.display}}>
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