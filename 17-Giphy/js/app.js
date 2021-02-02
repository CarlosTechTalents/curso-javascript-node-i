/* Este componente hace la búsqueda por XMLHttpRequest a la API de Giphy */
/* le pasamos un keyword para la búsqueda y si viene vacio lo inicializa en un valor por defecto */
/* retorna un array con los datos de los gifs */

// Esta es la función de llamada al hacer click en el botón buscar
const buscarGifs = () => {
	const consulta = document.getElementById('gifInput').value
	getGifs(consulta)
		// The first runs when the promise resolves, with the request.response specified within the resolve() method.
		.then(
			(response) => {
				console.log(response)

				// Extrae el array data de la respuesta JSON, inicializamos data como array vacio por si viene undefined
				const { data = [] } = response

				// Crea un array de las URLs que aparecen en data haciendo una comprobación primero que se podría omitir.
				// ya que aunque data venga vacio y no fuese una array, lo he inicializado como array.
				if (Array.isArray(data)) {
					listaDeGifs = document.getElementById('listaDeGifs')
					listaDeGifs.innerHTML = ''
					data.map((item) => {
						listaDeGifs.appendChild(renderGif(item))
					})
					return // este es el return de la función buscaGifs en caso de que data contenga datos
				}
			},
			// The second runs when the promise is rejected, and logs the Error specified with the reject() method.
			(Error) => {
				console.log(Error)
			}
		)
}

// Esta es la petición GET a la API
function getGifs(keyword) {
	const apiKey = 'dqzugLIUVhHSzJ30oJayHyYs44lSvTBq'
	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=100&offset=0&rating=G&lang=en`

	// Crear una nueva promesa como retorno con una función como argumento con dos parámetros, resolve y reject
	return new Promise((resolve, reject) => {
		var request = new XMLHttpRequest()
		request.open('GET', apiURL)
		// Tipos de respuesta de la petición
		// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType
		request.responseType = 'json'
		// Comprueba si ha habido éxito cuando carga la petición.
		request.onload = () => {
			if (request.status === 200) {
				// Si todo va bien, resolver la promesa pasando de vuelta la respuesta de la petición en request.response
				//				console.log(request.response.data)
				resolve(request.response)
			} else {
				// Y si falla,rechazar la promesa con un mensaje de error.
				reject(Error("Data didn't load successfully; error code:" + request.statusText))
			}
		}
		request.onerror = () => {
			// También puede suceder que falle la petición entera desde su inicio.
			// Esto puede significar un problema de red, por lo que se rechaza la promesa con el mensaje apropiado.
			reject(Error('Se ha producido un problema de red.'))
		}
		// Manda la petición.
		request.send()
	})
}

// Esta función crea el elemento nuevo de la lista
const renderGif = (item) => {
	const fecha = item.import_datetime
	const titulo = item.title
	const imagen = item.images.fixed_width.url

	let li = document.createElement('li')
	li.innerHTML = `
  <div class="gif-item">
		<img class="gif-image" src="${imagen}"/>
		<div class="gif-container">
	    <h5>${titulo}</h5>
			<h6>${fecha}</h6>
		</div>
  </div>
  `
	return li
}
