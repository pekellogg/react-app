import React, { Component } from "react";
import { connect } from "react-redux";
import Photo from "./Photo";

class PhotosContainer extends Component {

  displayPhotos = () => {
    if (this.props.loading) {
      return "Loading...";
    } else { return (
        this.props.photos.all.map((photo) => (
          <div id={photo.external_id} key={photo.external_id} >
            < Photo
              key={photo.external_id}
              externalId={photo.external_id}
              source={photo.source}
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
        {this.displayPhotos()}
      </div>
    );
  };

};

const mapStateToProps = (state) => ({ photos: state.photos });

export default connect(mapStateToProps)(PhotosContainer);