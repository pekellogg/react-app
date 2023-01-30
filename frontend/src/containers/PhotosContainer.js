import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPhotos } from "../actions/photoActions";
import Photos from "../components/Photos";

class PhotosContainer extends Component {

  componentDidMount() {
    this.props.fetchPhotos();
  };

  handleLoading = () => {
    if (this.props.loading) {
      return (
        <div>
          Loading...
        </div>
      );
    } else {
      return (
        <Photos photos={this.props.photos} />
      );
    }
  };

  render() {
    return (
      <div>
        <h1>Mars Photos</h1>
        {this.handleLoading()}
      </div>
    );
  };

};

const mapStateToProps = (state) => {
  return {
    photos: state.photos.all,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosContainer);