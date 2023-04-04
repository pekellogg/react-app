import React, { Component } from "react";
import Photo from "./Photo";

import "./PhotosContainer.css";

class RoverPhotosContainer extends Component {

  displayMappedPhotos = () => (
    this.props.photos.map((photo) => (
      < Photo
        { ...photo }
        className="Photo"
        id={`Photo-${photo.id}`}
        key={photo.id}
      />
    ))
  );

  render() {
    return (
      <div className="PhotosContainer" id={`PhotosContainer-${this.props.cameraid}`}>
        { this.displayMappedPhotos() }
      </div>
    );
  };

};

export default (RoverPhotosContainer);