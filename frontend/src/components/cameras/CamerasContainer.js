import React, {Component} from "react";
import {connect} from "react-redux";
import Camera from "./Camera";

import "./CamerasContainer.css";

class CamerasContainer extends Component {

  // componentDidMount() {
  //   {console.log("Component Mounted")}
  // };

  mapCamerasToRover = () => {
    return this.filterCameras().map((camera) => <Camera {...camera} key={camera.id}/>);
  };
  
  filterCameras = () => {
    if (this.props.loading) return "Loading...";
    return this.props.cameras.filter((camera) => this.props.cameraids.includes(camera.id.toString()));
  }

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