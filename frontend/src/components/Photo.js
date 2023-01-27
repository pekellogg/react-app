import React from "react";

class Photo extends React.Component {

  render() {
    return (
      <div className="photos">
        <img
          src={this.props.source}
          alt="a photo of Mars"
        />
      </div>
    );
  };

};

export default Photo;