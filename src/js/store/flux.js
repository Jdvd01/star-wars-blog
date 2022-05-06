const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://3000-jdvd01-starwarsapi-l8m22p452n7.ws-us44.gitpod.io",
			endPoints: ["people", "planets"],
			people: JSON.parse(localStorage.getItem("people")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			favorites: JSON.parse(localStorage.getItem("favorites")) || [],
			token: localStorage.getItem("token") || ""
		},
		actions: {
			fetchApi: async () => {
				const store = getStore()
				if (!store.people.length || !store.planets.length) {
					try {
						for (let endPoint of store.endPoints) {
							let response = await fetch(`${store.urlBase}/${endPoint}`)
							let data = await response.json()

							if (response.ok) {
								console.log(data)
								localStorage.setItem([endPoint], JSON.stringify(data))
							}
						}
					} catch (error) {
						console.log("Hubo un error", error)
					}
				}
			},
			getFavorites: async () => {
				let store = getStore();
				try {
					let response = await fetch(`${store.urlBase}/user/favorites`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`
						}
					})
					if (response.ok) {
						let data = await response.json()
						setStore({
							...store,
							favorites: data
						})
						console.log(data)
						localStorage.setItem("favorites", JSON.stringify(store.favorites))
					}
				} catch (error) {
					console.log("Hubo un error", error)
				}
			},
			addFavorites: async (id, name, nature) => {
				let store = getStore();
				let actions = getActions();
				let body = {
					"nature_id": id,
					"name": name
				}
				try {
					let response = await fetch(`${store.urlBase}/user/favorites/${nature}`, {
						method: 'POST',
						body: JSON.stringify(body),
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`
						}
					})
					if (response.ok) {
						actions.getFavorites()
					}
				} catch (error) {
					console.log("hubo un error", error)
				}
			},
			deleteFavorite: async (nature_id, nature) => {
				let store = getStore()
				let actions = getActions()
				let body = {
					"nature_id": nature_id,
					"nature": nature
				}
				try {
					let response = await fetch(`${store.urlBase}/user/favorites/${nature}/${nature_id}`, {
						method: 'DELETE',
						body: JSON.stringify(body),
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`
						},
					})
					if (response.ok) {
						actions.getFavorites()
					}
				}catch(error){
					console.log("Hubo un error", error)
				}
				
			},
			handleLogin: async (login) => {
				let store = getStore()
				let actions = getActions()
				const response = await fetch(`${store.urlBase}/login`, {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(login)
				})
				let data = await response.json()
				if (response.ok) {
					setStore({
						...store,
						token: data.token
					})
					localStorage.setItem("token", data.token)
					actions.getFavorites()
				} else {
					window.alert("Hubo un error, pruebe a registrarse")
				}
			},
			handleRegister: async (register) => {
				let store = getStore()
				const response = await fetch(`${store.urlBase}/register`, {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(register)
				})
				if (response.ok) {
					window.alert("Se ha registrado con exito, ahora debe hacer Login")
				} else {
					window.alert("Hubo un error, quizas el usuario ya esta creado, pruebe haciendo Login")
				}
			},
			handleLogout: () => {
				let store = getStore()
				setStore({
					...store,
					token: ""
				})
				localStorage.removeItem("token")
				localStorage.removeItem("favorites")
				window.alert('Sesion finalizada con exito')
			}
		}
	}
};

export default getState;