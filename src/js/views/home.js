import React, { useContext } from "react";
import "../../styles/home.css";
import Card from "../component/Card.jsx";
import { Context } from "../store/appContext.js";


export const Home = () => {
	const {store} = useContext(Context)

	return (
		<div className="container col-12">
			<h1>Characters:</h1>
			<div className="card-scroll row flex-nowrap">
				{store.people.map((item) =>{
					return(
					<Card key={item.id} item={item} nature="people" />
					);
				})}
			</div>

			<h1>Planets:</h1>
			<div className="card-scroll row flex-nowrap">
				{store.planets.map((item) =>{
					return(
					<Card key={item.id} item={item} nature="planets" />
					);
				})}
			</div>
		</div>
	);
};

