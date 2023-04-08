import React, {Component} from "react";
import {connect} from "react-redux";
import Camera from "./Camera";

import "./CamerasContainer.css";

class CamerasContainer extends Component {

  // componentDidMount() {
  //   {console.log("Component Mounted")}
  // };

  displayLoadingOrCameras = () => {
    return this.props.loading ? "Loading..." : this.filteredCameras()
  }

  filteredCameras = () => this.props.cameras.filter((camera) => this.props.cameraids.includes(camera.id.toString()));

  mapCamerasToRover = () => this.displayLoadingOrCameras().map((camera) => <Camera {...camera} key={camera.id}/>);

  render() {
    return (
      <div className="CamerasContainer" id={`CamerasContainer-${this.props.id}`}>
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

export default connect(mapStateToProps)(CamerasContainer);