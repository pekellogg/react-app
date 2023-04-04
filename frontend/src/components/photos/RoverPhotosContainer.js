import React, { Component } from "react";
import Photo from "./Photo";

// import "./RoverPhotosContainer.css";

class RoverPhotosContainer extends Component {

  displayMappedPhotos = () => {
    if (this.props.photos.length > 0) {
      return (
        this.props.photos.map((photo) => (
          < Photo
            { ...photo }
            className="Photo"
            id={`Photo-${photo.id}`}
            key={photo.id}
          />
        ))
      );
    } else {
      return "No photos!"
    }
  };

  render() {
    return (
      <div className="PhotosContainer" id={`PhotosContainer-${this.props.cameraid}`}>
        { this.displayMappedPhotos() }
      </div>
    );
  };

};

export default (RoverPhotosContainer);