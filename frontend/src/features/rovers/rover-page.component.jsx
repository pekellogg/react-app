import React from "react";

export default class RoverPage extends React.Component {

	handleClick = (e) => {
		// query by earth_date
		// http://mars-photos.herokuapp.com/api/v1/rovers/Curiosity/photos?earth_date=2022-10-29
		
    // query by earth_date && camera type
    // http://mars-photos.herokuapp.com/api/v1/rovers/Curiosity/photos?earth_date=2022-10-29&camera=fhaz

    // Curiosity's Cameras
    // Abbreviation / Full Name
    // FHAZFront / Hazard Avoidance Camera
    // NAVCAM / Navigation Camera
    // MAST / Mast Camera
    // CHEMCAM / Chemistry and Camera Complex
    // MAHLI / Mars Hand Lens Imager
    // MARDI / Mars Descent Imager
    // RHAZ / Rear Hazard Avoidance Camera

    // let url;
    // if (earthDate) {
    //   url = `http://localhost:3000/api/v1/rovers/${selectedRover.name}/photos`;
    // } else if (earthDate && cameraType) {

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