// https://developer.mozilla.org/es/docs/Web/API/Body
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch

const obtenerPokemons = async () => {
	try {
		const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
		const datos = await res.json()
		console.log(datos.results)
		let lista = document.getElementById('lista')
		datos.results.forEach(async (pokemon) => {
			const resUrl = await fetch(pokemon.url)
			const resUrlJSON = await resUrl.json()
			const imagen = await resUrlJSON.sprites.other['official-artwork'].front_default

			li = document.createElement('li')
			li.innerHTML = `
        <h3>${pokemon.name}</h3>
        <a href=${pokemon.url}><img src=${imagen} alt="" width="100px"></a>
        `
			lista.appendChild(li)
		})
	} catch (error) {
		alert(error)
	}
}

obtenerPokemons()
