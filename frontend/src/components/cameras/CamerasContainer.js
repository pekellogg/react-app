import React, { Component } from "react";
import { connect } from "react-redux";
import Camera from "./Camera";

import "./CamerasContainer.css";

class CamerasContainer extends Component {

  componentDidMount() {
    { console.log("Component Mounted"); }
  };
  
  displayCameras = () => {
    if (this.props.loading) {
      return "Loading...";
    } else { return (
        this.props.cameras.map((camera) => {
          return (
            < Camera
              { ...camera }
              className="Camera"
              id={camera.id}
              key={camera.id}
            />
          );
        })
      );
    }
  };

  render() {
    return (
      <div className="CamerasContainer" id={`CamerasContainer-${this.props.id}`}>
        { this.displayCameras() }
      </div>
    );
  };

};

const mapStateToProps = (state) => {
  const collectCameras = [];
  state.cameras.all.forEach((camera) => {
    if (camera.photos.length > 0) {
      collectCameras.push(camera);
    }
  });
  return { cameras: collectCameras.flat() };
};

export default connect(mapStateToProps)(CamerasContainer);