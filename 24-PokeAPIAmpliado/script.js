// https://developer.mozilla.org/es/docs/Web/API/Body
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch

let lista = document.getElementById('lista')
lista.style.visibility = 'hidden'
var filtro = document.getElementById('filtro')

fetch('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0')
	.then((res) => {
		return res.json()
	})
	.then((resJSON) => {
		let pokemons = resJSON.results
		pokemons.forEach((pokemon) => {
			fetch(pokemon.url)
				.then((resUrl) => {
					return resUrl.json()
				})
				.then((resUrlJSON) => {
					let sprites = resUrlJSON.sprites
					return sprites.other['official-artwork'].front_default
				})
				.then((imagen) => {
					div = document.createElement('div')
					div.setAttribute('class', 'lista-item')
					div.innerHTML = `
          <h3>${pokemon.name}</h3>
          <a href=${pokemon.url}><img src=${imagen != null ? imagen : './sinImagen.png'} alt="" /></a>
        `
					lista.appendChild(div)
				})
		})
	})
	.then(() => {
		lista.style.visibility = 'visible'
	})

//Función para filtrar elementos de la lista
const filtroKeyUp = (event) => {
	event.preventDefault()
	console.log(event)
	var textoFiltro = event.target.value.toLowerCase()
	console.log(textoFiltro)
	var items = lista.querySelectorAll('.lista-item')
	console.log(items)
	items.forEach((item) => {
		var itemNombre = item.childNodes[1].textContent
		if (itemNombre.toLowerCase().indexOf(textoFiltro) != -1) {
			item.style.display = 'block'
		} else {
			item.style.display = 'none'
		}
	})
}

// Evento del teclado en el campo de filtro
filtro.addEventListener('keyup', filtroKeyUp)
