import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpg";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-dark">
			<div className="container">
				<Link to={`/`}>
					<img src={logo} />
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						{/* Favorites button */}
						<button
							className="btn btn-dark dropdown-toggle favorites"
							type="button"
							id="dropdownMenuButton1"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Favorites
							<span className="badge bg-secondary mx-1">
								{store.favorites.length}
							</span>
						</button>

						<ul
							className="dropdown-menu"
							aria-labelledby="dropdownMenuButton1"
						>
							{
								/* If favorites is empty */
								store.favorites == "" ? (
									<li className="ms-2">(empty)</li>
								) : (
									/* Favorites list */
									store.favorites.map((item) => {										
										return (
											<li
												key={item._id}
												className="ms-2 d-flex"
											>
												<Link to={`${item.nature}/${item.uid}`}>
													{item.properties.name}
												</Link>

												<button
													type="button"
													className="delete"
													onClick={() =>
														actions.deleteFavorite(
															item._id
														)
													}
												>
													<i className="fas fa-trash"></i>
												</button>
											</li>
										);
									})
								)
							}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
