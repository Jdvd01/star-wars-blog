import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/StarWars.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<div className="navbar-brand mb-0 h1">{logo}</div>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li className="mx-2">0 favoritos</li>
						{/* lista de los favoritos */}
					</ul>
				</div>
			</div>
		</nav>
	);
};
