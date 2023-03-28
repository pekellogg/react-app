import React, { Component } from "react";
import Camera from "./Camera";

class CamerasContainer extends Component {

  displayCameras = () => {
    return (
      this.props.map((camera) => (
        < Camera
          { ...camera }
          key={camera.external_id}
        />
      ))
    );
  };

  render() {
    return (
      <div className="CamerasContainer">
        { this.displayCameras() }
      </div>
    );
  };

};

export default (CamerasContainer);