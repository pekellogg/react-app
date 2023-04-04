import React, { Component } from "react";
import PhotosContainer from "../photos/PhotosContainer";

import "./Camera.css";

class Camera extends Component {

  state = {
    active: false,
  };

  toggleState = () => {
    this.setState((prevState) => ({ 
      active: !prevState.active,
    }))
  };

  render() {
    return (
      <>
        <button className={this.props.className} id={this.props.id} onClick={this.onClick && this.props.handlesibchange}>
          { this.props.full_name }
        </button>
        <PhotosContainer cameraid={this.props.id} photos={this.props.photos}/>
      </>
    );
  };

};

export default Camera;