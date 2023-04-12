import {connect} from "react-redux";
import React, {Component} from "react";
import Photo from "./Photo";

import "./PhotoList.css";

class PhotoList extends Component {
  
  isShow = () => ("cameraphotos" in this.props) ? true : false

  displayAllPhotos = () => this.photosRef().map((photo) => <Photo {...photo} key={photo.id}/>);

  photosRef = () => this.isShow() ? this.mappedToRover() : this.props.photos

  mappedToRover = () => this.props.photos.filter((photo) => this.props.cameraphotos.includes(photo.id.toString()));

  render() {
    return (
      <div className={`PhotoList${this.props.isshow}`}>
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

export default connect(mapStateToProps)(PhotoList);