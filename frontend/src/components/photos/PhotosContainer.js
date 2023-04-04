import { connect } from "react-redux";
import React, { Component } from "react";
import Photo from "./Photo";

import "./PhotosContainer.css";

class PhotosContainer extends Component {

  displayAllPhotos = () => (
    this.props.photos.map((photo) => (
      < Photo
        { ...photo }
        className="Photo"
        id={`Photo-${photo.id}`}
        key={photo.id}
      />
    ))
  );

  displayIndex = () => {
    <>
      <h1>Mars Photos</h1>
      <div className="PhotosContainer" id="PhotosContainer">
        { this.displayAllPhotos() }
      </div>
    </>
  };

  displayMappedPhotos = () => {
    if (this.props.photos.length > 0) {
      return (
        <div className="PhotosContainer" id={`PhotosContainer-${this.props.cameraid}`}>
          { this.props.photos.map((photo) => (
              < Photo
                { ...photo }
                className="Photo"
                id={`Photo-${photo.id}`}
                key={photo.id}
              />
            ))
          }
        </div>
      );
    } else {
      return "No photos!"
    }
  };



  render() {
    return (
      <>
        { this.displayMappedPhotos() }
        {/* { this.props.passedphotos ? this.displayMappedPhotos() : this.displayIndex() } */}
      </>
    );
  };

};

const mapStateToProps = (state) => { 
  const allPhotos = [];
  state.cameras.all.forEach(camera => {
    if (camera.photos.length > 0) {
      allPhotos.push(camera.photos)
    }
  })
  const flatPhotos = allPhotos.flat();
  return { photos: flatPhotos };
};

export default connect(mapStateToProps)(PhotosContainer);