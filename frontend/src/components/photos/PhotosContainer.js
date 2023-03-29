import { connect } from "react-redux";
import React, { Component } from "react";
import Photo from "./Photo";

class PhotosContainer extends Component {

  displayAllPhotos = () => (
    this.props.photos.map((photo) => (
      <div className="PhotoContainer" id={`PhotoContainer-${photo.id}`} key={`PhotoContainer-${photo.id}`} >
        < Photo
          { ...photo }
          className="Photo"
          id={`Photo-${photo.id}`}
          key={photo.id}
        />
      </div>
    ))
  );

  render() {
    return (
      <div className="PhotosContainer" id="PhotosContainer">
        <h1>Mars Photos</h1>
        { this.displayAllPhotos() }
      </div>
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