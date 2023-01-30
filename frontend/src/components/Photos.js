import React from "react";
import Photo from "./Photo";

class Photos extends React.Component {

  displayPhotos = () => {
    // console.log(this.props.photos);
    return (
      this.props.photos.map((photo) => (
        < Photo
          key={photo.external_id}
          externalId={photo.external_id}
          source={photo.source}
        />
      ))
    );
  };

  render() {
    return (
      <div>
        {this.displayPhotos()}
      </div>
    );
  };

};

export default Photos;