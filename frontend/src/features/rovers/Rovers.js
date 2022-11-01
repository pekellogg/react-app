import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRovers } from "./roversSlice";

export function Rovers() {
	const rovers = useSelector(state => state.rovers.entities);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchRovers())
	}, [dispatch]);

	const renderRovers = () => {
		return rovers.map(rover => <Rovers key={rover.external_id} rover={rover} />);
	}

	return (
		<div className="card">
			{renderRovers()}
			{/* <h2>{this.props.name}</h2>
			<p>Mission status: {this.props.status}</p>
			<p>Launch date: {this.props.launchDate}</p>
			<p>Landing date: {this.props.landingDate}</p> */}
		</div>
	);

};