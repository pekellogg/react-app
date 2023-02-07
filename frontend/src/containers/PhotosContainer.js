import React, { Component } from "react";
import { connect } from "react-redux";
import Photos from "../components/Photos";

class PhotosContainer extends Component {

  handleLoading = () => {
    if (this.props.loading) {
      return (
        <div>
          Loading...
        </div>
      );
    } else {
      return (
        <Photos photos={this.props.photos.all} />
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

const mapStateToProps = (state) => ({ photos: state.photos });

export default connect(mapStateToProps)(PhotosContainer);