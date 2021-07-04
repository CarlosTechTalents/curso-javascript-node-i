// https://developer.mozilla.org/es/docs/Web/API/Body
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch

// https://css-tricks.com/snippets/css/complete-guide-grid/
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/

fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000')
	.then((res) => {
		return res.json()
	})
	.then((datosJSON) => {
		let pokemons = datosJSON.results
		let lista = document.getElementById('lista')
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
					console.log(pokemon.name)
					li = document.createElement('li')
					li.setAttribute('class', 'lista-item')
					li.innerHTML = `
            <h3>${pokemon.name}</h3>
            <a href=${pokemon.url}><img src=${imagen} alt="" width="100px"></a>
          `
					lista.appendChild(li)
				})
		})
	})

var filtro = document.getElementById('filtro')

const filtroKeyUp = (event) => {
	event.preventDefault()
	var textoFiltro = event.target.value.toLowerCase()
	var items = lista.querySelectorAll('.lista-item')
	items.forEach((item) => {
		var itemNombre = item.childNodes[1].textContent
		if (itemNombre.toLowerCase().indexOf(textoFiltro) != -1) {
			item.style.display = 'block'
		} else {
			item.style.display = 'none'
		}
	})
}

filtro.addEventListener('keyup', filtroKeyUp)
