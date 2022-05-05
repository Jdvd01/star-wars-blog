const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: localStorage.getItem("token") || "",
			urlBase: "https://3000-jdvd01-starwarsapi-l8m22p452n7.ws-us44.gitpod.io",
			endPoints: ["people", "planets"],
			people: JSON.parse(localStorage.getItem("people")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			favorites: JSON.parse(localStorage.getItem("favorites")) || []
		},
		actions: {
			fetchApi: async () => {
				const store = getStore()
				if (!store.people.length || !store.planets.length) {
					try {
						let response = await fetch(`${store.urlBase}/people`)
						let response2 = await fetch(`${store.urlBase}/planets`)
						let data = await response.json()
						let data2 = await response2.json()
						if (response.ok){
							localStorage.setItem("people", JSON.stringify(data))
							localStorage.setItem("planets", JSON.stringify(data2))
						}
					} catch (error) {
						console.log("Hubo un error", error)
					}
				}
			},
			addFavorites: (id) =>{
				let store = getStore();
				let exist = store.favorites.find((item) =>{
					return(
						item.id == id
					)
				})
				if(!exist){
					for(let endPoint of store.endPoints){
						let favorite;
						favorite = store[endPoint].find((item) =>{
							return(
								item.id == id
							)
						})
						if(favorite){
							setStore({
								...store,
								favorites: [...store.favorites, favorite]
							})
							localStorage.setItem("favorites", JSON.stringify(store.favorites))
							return;
						}
					}
				}else{
					let newFavorite = store.favorites.filter((item) =>{
						return(
							item.id != id
						)
					})
					setStore({
						...store,
						favorites: newFavorite
					})
					localStorage.setItem("favorites", JSON.stringify(store.favorites))
				}
			},
			deleteFavorite: (id) =>{
				let store = getStore()
				let deleteFavorite = store.favorites.filter((item) =>{
					return (
						item.id != id
					)
				})
				setStore({
					...store,
					favorites: deleteFavorite
				})
				localStorage.setItem("favorites", JSON.stringify(store.favorites))
			},
			handleLogin: async (login) =>{
				let store = getStore()
				const response = await fetch(`${store.urlBase}/login`, {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(login)
				})
				let data = await response.json()
				if(response.ok){
					setStore({
						...store,
						token: data.token
					})
					localStorage.setItem("token", data.token)
					window.alert("Sesion iniciada con exito")
				}else{
					window.alert("Hubo un error, pruebe a registrarse")
				}
			},
			handleRegister: async (register) =>{
				let store = getStore()
				const response = await fetch(`${store.urlBase}/register`, {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(register)
				})
				let data = await response.json()
				if(response.ok){
					window.alert("Se ha registrado con exito, ahora debe hacer Login")
				}else{
					window.alert("Hubo un error, quizas el usuario ya esta creado, pruebe haciendo Login")
				}
			},
			handleLogout: () =>{
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
