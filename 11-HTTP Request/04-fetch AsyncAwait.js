// Otro tipo de petición por fetch
// En https://pokeapi.co/ puedes obtener datos de Pokemons sin necesidad de API Key
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch
// Fetch no está soportado directamente por Node, por eso hay que ejecutarlo a través del html

const obtenerPokemons = async () => {
	try {
		const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
		const datos = await res.json()
		let lista = document.getElementById('lista')
		datos.results.forEach((element) => {
			itemLista = document.createElement('li')
			itemLista.innerHTML = `
          <h3>${element.name}</h4>
          <a href=${element.url}>${element.url}</a>
      `
			lista.append(itemLista)
		})
	} catch (error) {
		console.error(error)
	}
}
obtenerPokemons()
