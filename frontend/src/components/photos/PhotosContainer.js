import { connect } from "react-redux";
import React, { Component } from "react";
import Photo from "./Photo";

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

  render() {
    return (
      <>
        <h1>Mars Photos</h1>
        <div className="PhotosContainer" id="PhotosContainer">
          { this.displayAllPhotos() }
        </div>
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