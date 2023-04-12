import React, {Component} from "react";
import {connect} from "react-redux";
import CameraButton from "./CameraButton";

class CameraButtonList extends Component {

  loadingOrCameras = () => {
    return this.props.loading ? "Loading..." : this.filteredCameras()
  }

  filteredCameras = () => this.props.cameras.filter((camera) => this.props.cameraids.includes(camera.id.toString()));

  mapCamerasToRover = () => this.loadingOrCameras().map((camera) => <CameraButton {...camera} key={camera.id}/>);

  render() {
    return (
      <div className="CameraButtonList" id={`CameraButtonList-${this.props.id}`} style={{visibility: this.props.visibility}}>
        {this.mapCamerasToRover()}
      </div>
    );
  };

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