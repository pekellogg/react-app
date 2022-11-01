import React from "react";
import { Link } from "react-router-dom";

export default class RoverCard extends React.Component {

	render() {
		return (
			<div className="card">
				<Link className="button" to={`/rovers/${this.props.name}`}>
					<h2>{this.props.name}</h2>
				</Link>
				<div className="details">
					<p>Mission status: {this.props.status}</p>
					<p>Launch date: {this.props.launchDate}</p>
					<p>Landing date: {this.props.landingDate}</p>
				</div>
			</div>
		);
	}

};