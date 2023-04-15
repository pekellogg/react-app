import {connect} from "react-redux";
import Photo from "./Photo";

import "./PhotoList.css";

const PhotoList = (props) => {
  
  const isShow = () => ("cameraphotos" in props) ? true : false

  const displayAllPhotos = () => photosRef().map((photo) => <Photo {...photo} key={photo.id}/>);

  const photosRef = () => isShow() ? mappedToRover() : props.photos

  const mappedToRover = () => props.photos.filter((photo) => props.cameraphotos.includes(photo.id.toString()));

  return (
    <div className="PhotoList" style={{display: props.display}}>
      {displayAllPhotos()}
    </div>
  );
};

const mapStateToProps = (state) => {
  const collectPhotos = [];
  Object.values(state.photos.byId).forEach((photo) => collectPhotos.push(photo));
  return {photos: collectPhotos.flat()};
};

export default connect(mapStateToProps)(PhotoList);