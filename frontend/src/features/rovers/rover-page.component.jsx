import React from "react";

export default class RoverPage extends React.Component {

	handleClick = (e) => {
		// query by sol && rover's name per API
		// http://mars-photos.herokuapp.com/api/v1/rovers/Curiosity/photos?sol=3638

    // let url;
    // if (sol) {
    //   url = `http://localhost:3000/api/v1/rovers/${selectedRover.name}/photos`;
    // } 
    // fetch(url)
    // .then((response) => response.json())
    // .then((images) => this.displayRoverImages(images));
	}

	render() {
		return (
			<div className="rover-page">
        <h1></h1>
        <img src="" />
        <select>
          earth date
        </select>
        <select>
          camera type
        </select>
			</div>
		);
	}

};