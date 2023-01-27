import React from "react";

class Comment extends React.Component {

  render() {
    return (
      <div>
        <li>{console.log("this.props", this.props)}</li>
      </div>
    );
  };

};

export default Comment;