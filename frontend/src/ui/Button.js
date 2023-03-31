import React, { Component } from "react";

// import "./Button.css";

class Button extends Component {

  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked
    }));
  };

	render() {
		return (
      <button className={this.props.className} id={this.props.id} onClick={this.handleClick}>
        { this.props.children }
      </button>
    );
	};

};

export default Button;