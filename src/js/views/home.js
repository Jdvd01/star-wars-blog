import React, { useContext } from "react";
import "../../styles/home.css";
import Card from "../component/Card.jsx";
import { Context } from "../store/appContext.js";
import Title from "../component/Title.jsx";


export const Home = () => {
	const {store} = useContext(Context)

	return (
		<div className="container col-12 cards-container">
			<Title title="Characters" />
			<div className="card-scroll row flex-nowrap">
				{store.people.map((item) =>{
					return(
					<Card key={item.uid} {...item} nature="people" />
					);
				})}
			</div>

			<Title title="Planets" />
			<div className="card-scroll row flex-nowrap">
				{store.planets.map((item) =>{
					return(
					<Card key={item.uid} {...item} nature="planets" />
					);
				})}
			</div>

			<Title title="Vehicles" />
			<div className="card-scroll row flex-nowrap">
				{store.vehicles.map((item) =>{
					return(
						<Card key={item.uid} {...item} nature="vehicles" />
					);
				})}
			</div>
		</div>
	);
};

