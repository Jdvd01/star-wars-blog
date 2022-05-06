import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpg";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-dark">
			<div className="container">
				<Link to={`/`}>
					<img src={logo} />
				</Link>
				<div className="ml-auto">
					{store.token?.length > 0 ?
						(
							<div className="dropdown">
								<button
									className="btn btn-dark dropdown-toggle favorites"
									type="button"
									id="dropdownMenuButton1"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									Favorites
									<span className="badge bg-secondary mx-1">
										{store.favorites.length}
									</span>
								</button>
								<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

									{ /* Si no hay favorites muestra esto */
										store.favorites == "" ? (<li className="ms-2">(empty)</li>) 
										: (
											/* Lista de favoritos */
											store.favorites.map((item) => {
												return (
													<li key={item.nature_id} className="ms-2 d-flex">
														{item.name}
														<button
															type="button"
															className="delete"
															onClick={() => actions.deleteFavorite(item.nature_id, item.nature)}>
															<i className="fas fa-trash"></i>
														</button>
													</li>
												);
											})
										)
									}
								</ul>
								<button type="button" 
								className="btn btn-dark register"
								onClick={() => actions.handleLogout()}>
									<a href="/"> <i className="fas fa-sign-out-alt"></i></a>
								</button>
							</div>

						) : (
							<div className="btn-navbar">
								<button type="button" className="btn btn-dark register">
									<Link to='/register'>Register</Link>
								</button>
								<button type="button" className="btn btn-dark register">
									<Link to="/login">Login</Link>
								</button>
							</div>
						)}
				</div>
			</div>
		</nav>
	);
};
