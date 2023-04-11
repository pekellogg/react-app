import {connect} from "react-redux";
import React, {Component} from "react";
import Photo from "./Photo";

import "./PhotosContainer.css";

class PhotosContainer extends Component {
  
  isShow = () => ("cameraphotos" in this.props) ? true : false

  displayAllPhotos = () => this.photosRef().map((photo) => <Photo {...photo} key={photo.id}/>);

  photosRef = () => this.isShow() ? this.mappedToRover() : this.props.photos

  mappedToRover = () => this.props.photos.filter((photo) => this.props.cameraphotos.includes(photo.id.toString()));

  render() {
    return (
      <div className={"PhotosContainer" + this.props.className} visible={this.props.visible}>
        {this.displayAllPhotos()}
      </div>
    );
  };

};

const mapStateToProps = (state) => {
  const collectPhotos = [];
  Object.values(state.photos.byId).forEach((photo) => collectPhotos.push(photo));
  return {photos: collectPhotos.flat()};
};

export default connect(mapStateToProps)(PhotosContainer);