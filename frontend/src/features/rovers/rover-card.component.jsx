import React from "react";

export default class RoverCard extends React.Component {

	render() {
		return (
			<div className="rover-card">
				<h1>{this.props.name}</h1>
				<h2>Mission status: {this.props.status}</h2>
				<h2>Launch date: {this.props.launchDate}</h2>
				<h2>Landing date: {this.props.landingDate}</h2>
			</div>
		);
	}

};