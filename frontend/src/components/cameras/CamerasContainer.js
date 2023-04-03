import React, { Component } from "react";
import { connect } from "react-redux";
import Camera from "./Camera";

import "./CamerasContainer.css";

class CamerasContainer extends Component {

  camerasWithPhotos = () => {
    const collectCameras = [];
    this.props.cameras.all.forEach((camera) => {
      if (camera.photos.length > 0) {
        collectCameras.push(camera)
      }
    })
    return collectCameras.flat();
  };

  displayCameras = () => {
    if (this.props.loading) {
      return "Loading...";
    } else { return (
        this.camerasWithPhotos().map((camera) => {
          return (
            < Camera
              { ...camera }
              className="Camera"
              id={camera.id}
              key={camera.id}
              // onClick={this.handleSiblingChange}
            />
          );
        })
      );
    }
  };

  // handleSiblingChange = (e) => {
  //   const div = e.target.nextElementSibling
  //   if (div.className === "RoverPhotosContainer") {
  //     div.className += "Display"
  //   } else {
  //     div.className = "RoverPhotosContainer"
  //   }
  // };

  render() {
    return (
      <div className="CamerasContainer" id={`CamerasContainer-${this.props.id}`}>
        { this.displayCameras() }
      </div>
    );
  };

};

const mapStateToProps = (state) => ({ cameras: state.cameras });

export default connect(mapStateToProps)(CamerasContainer);