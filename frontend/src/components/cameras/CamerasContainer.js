import React, { Component } from "react";
import { connect } from "react-redux";
import Camera from "./Camera";

class CamerasContainer extends Component {

  handleClick = () => {

  };

  displayCameras = () => {
    if (this.props.loading) {
      return "Loading...";
    } else { return (
        this.props.cameras.all.map((camera) => (
          <div className="CameraContainer" id={`CameraContainer-${camera.external_id}`} key={camera.external_id} >
            < Camera
              { ...camera }
              key={camera.external_id}
              onClick={this.handleClick}
            />
          </div>
        ))
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

const mapStateToProps = (state) => ({ cameras: state.cameras });

export default connect(mapStateToProps)(CamerasContainer);