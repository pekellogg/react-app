import React, { Component } from "react";
import { connect } from "react-redux";
import Photo from "./Photo";

class PhotosContainer extends Component {

  mappedPhotos = (cameraId) => {
    return this.props.photos.all.map((photo) => photo.camera_id == cameraId)
  };

  displayAllPhotos = () => {
    if (this.props.loading) {
      return "Loading...";
    } else { return (
        this.props.photos.all.map((photo) => (
          <div id={photo.external_id} key={photo.external_id} >
            < Photo
              { ...photo }
              key={photo.external_id}
            />
          </div>
        ))
      );
    }
  };

  render() {
    return (
      <div>
        <h1>Mars Photos</h1>
        { this.displayAllPhotos() }
      </div>
    );
  };

};

const mapStateToProps = (state) => ({ photos: state.photos });

export default connect(mapStateToProps)(PhotosContainer);