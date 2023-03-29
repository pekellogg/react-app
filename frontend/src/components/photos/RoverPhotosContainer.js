import React, { Component } from "react";
import Photo from "./Photo";

class RoverPhotosContainer extends Component {

  displayMappedPhotos = () => {
    if (this.props.photos.length > 0) {
      return (
        this.props.photos.map((photo) => (
          <div className="RoverPhotoContainer" id={`RoverPhotoContainer-${photo.id}`} key={`RoverPhotoContainer-${photo.id}`} >
            < Photo
              { ...photo }
              className="Photo"
              id={`Photo-${photo.id}`}
              key={photo.id}
            />
          </div>
        ))
      );
    } else {
      return "No photos!"
    }
  };

  render() {
    return (
      <div className="RoverPhotosContainer" id={`RoverPhotosContainer-${this.props.cameraid}`}>
        { this.displayMappedPhotos() }
      </div>
    );
  };

};

export default (RoverPhotosContainer);