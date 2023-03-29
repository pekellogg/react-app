import React, { Component } from "react";
import { connect } from "react-redux";
import Camera from "./Camera";

class CamerasContainer extends Component {

  displayAllCameras = () => {
    if (this.props.loading) {
      return "Loading...";
    } else { return (
        this.props.cameras.all.map((camera) => (
          <div id={camera.external_id} key={camera.external_id} >
            < Camera
              { ...camera }
              key={camera.external_id}
            />
          </div>
        ))
      );
    }
  };

  render() {
    return (
      <div className="CamerasContainer">
        { this.displayAllCameras() }
      </div>
    );
  };

};

const mapStateToProps = (state) => ({ cameras: state.cameras });

export default connect(mapStateToProps)(CamerasContainer);