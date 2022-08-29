import React from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://www.swapi.tech/api",
			endPoints: ["people", "planets", "vehicles"],
			people: JSON.parse(localStorage.getItem("people")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
			favorites: JSON.parse(localStorage.getItem("favorites")) || [],
		},
		actions: {
			fetchApi: async () => {
				const store = getStore();
				if (!store.people.length) {
					for (let nature of store.endPoints) {
						try {
							let response = await fetch(
								`${store.urlBase}/${nature}`
							);
							if (response.ok) {
								let data = await response.json();
								data.results.map(async (item) => {
									let newResponse = await fetch(
										`${store.urlBase}/${nature}/${item.uid}`
									);
									if (newResponse.ok) {
										let newResult =
											await newResponse.json();
										setStore({
											...store,
											[nature]: [
												...store[nature],
												newResult.result,
											],
										});
										localStorage.setItem(
											nature,
											JSON.stringify(store[nature])
										);
									}
								});
							}
						} catch (error) {
							console.log("Hubo un error:", error);
						}
					}
				}
			},
			addFavorites: (id) => {
				let store = getStore();
				let exist = store.favorites.find((item) => {
					return item._id == id;
				});
				if (!exist) {
					for (let endPoint of store.endPoints) {
						let favorite;
						favorite = store[endPoint].find((item) => {
							return item._id == id;
						});
						if (favorite) {

							// Adding nature property to favorite item 
							favorite.nature = endPoint
							
							setStore({
								...store,
								favorites: [...store.favorites, favorite],
							});
							localStorage.setItem(
								"favorites",
								JSON.stringify(store.favorites)
							);
							return;
						}
					}
				} else {
					let newFavorite = store.favorites.filter((item) => {
						return item._id != id;
					});
					setStore({
						...store,
						favorites: newFavorite,
					});
					localStorage.setItem(
						"favorites",
						JSON.stringify(store.favorites)
					);
				}
			},
			deleteFavorite: (id) => {
				let store = getStore();
				let deleteFavorite = store.favorites.filter((item) => {
					return item._id != id;
				});
				setStore({
					...store,
					favorites: deleteFavorite,
				});
				localStorage.setItem(
					"favorites",
					JSON.stringify(store.favorites)
				);
			},
			isFavorite: (newId) => {
				let store = getStore();
				let favorite = store.favorites.find((item) => {
					return item._id == newId;
				});

				if (favorite) {
					return <i className="fas fa-heart red"></i>;
				} else {
					return <i className="fas fa-heart"></i>;
				}
			},
		},
	};
};

export default getState;
