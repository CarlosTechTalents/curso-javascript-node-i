// Para generar la API Key de You Tube, entrar con una cuenta de Google en https://console.cloud.google.com/
// Crear Proyecto > APIs y servicios > Biblioteca > YouTube Data API v3 > Habilitar > Credenciales > Crear Credencial > API Key

// Función que se ejecuta al hacer click en el botón del formulario de búsqueda
const buscarVideo = () => {
	const consulta = document.getElementById('videoInput').value
	document.getElementById('listaDeVideos').innerHTML = ''
	document.getElementById('botones').innerHTML = ''

	let token = ''
	solicitudFetch(token, consulta)
}

//Petición GET a la API de Youtube
const solicitudFetch = async (token, consulta) => {
	try {
		const urlYoutube = 'https://www.googleapis.com/youtube/v3/search'
		const parametros = {
			q: consulta,
			type: 'video',
			key: 'AIzaSyB1kW_qegN472t8UWEbhkCNY7XFecE7-68',
			pageToken: token,
			part: 'snippet, id'
		}
		const url = `
			${urlYoutube}
			?q=${parametros.q}
			&type=${parametros.type}
			&key=${parametros.key}
			&pageToken=${parametros.pageToken}
			&part=${parametros.part}
		`
		const antes = new Date()

		const res = await fetch(url)
		const resJSon = await res.json()

		const despues = new Date()
		console.log(`La búsqueda ha tardado ${despues - antes} milisegundos`)
		console.log(resJSon)

		let nextPageToken = resJSon.nextPageToken // Vienen es los datos devueltos por la API de YouTube
		let prevPageToken = resJSon.prevPageToken

		listaDeVideos = document.getElementById('listaDeVideos')
		resJSon.items.map((item) => {
			listaDeVideos.appendChild(renderVideo(item))
		})
		let botones = getBotones(prevPageToken, nextPageToken, consulta)
		document.getElementById('botones').innerHTML = botones
	} catch (error) {
		console.error('Error:', error)
	}
}

// Renderizado de cada elemento de la lista de resultados de la búsqueda
const renderVideo = (item) => {
	const videoId = item.id.videoId
	const titulo = item.snippet.title
	const descripcion = item.snippet.description
	const miniatura = item.snippet.thumbnails.high.url
	const tituloCanal = item.snippet.channelTitle
	const fechaVideo = item.snippet.publishedAt

	let li = document.createElement('li')
	li.innerHTML = `
  <div class="lista-izquierda">
    <img src="${miniatura}" class="pointer" data-url="http://www.youtube.com/embed/${videoId}" onclick="verVideoModal(dataset.url)"/>
  </div>
  <div class="lista-derecha">
    <h5 class="pointer" data-url="http://www.youtube.com/embed/${videoId}" onclick="verVideoModal(dataset.url)">${titulo}</h5>
    <h6><span class="autor">${tituloCanal}</span> Fecha: ${fechaVideo}</h6>
    <p>${descripcion}</p>
  </div>
  `
	return li
}

// Botones Siguiente y Atrás
const getBotones = (prevPageToken, nextPageToken, consulta) => {
	let btnOutput = ''
	if (prevPageToken) {
		btnOutput = `
			<div>
			<button id="boton-anterior" class="botones" data-token="${prevPageToken}" data-query="${consulta}" onclick="paginaAnterior()">Anterior</button>
			<button id="boton-siguiente" class="botones" data-token="${nextPageToken}" data-query="${consulta}" onclick="paginaSiguiente()">Siguiente</button>
			</div>
		`
	} else {
		btnOutput = `
			<div>
				<button id="boton-siguiente" class="botones" data-token="${nextPageToken}" data-query="${consulta}" onclick="paginaSiguiente()">Siguiente</button>
			</div>
		`
	}
	return btnOutput
}

const paginaSiguiente = () => {
	let token = document.getElementById('boton-siguiente').dataset.token
	let consulta = document.getElementById('boton-siguiente').dataset.query

	document.getElementById('listaDeVideos').innerHTML = ''
	document.getElementById('botones').innerHTML = ''

	solicitudFetch(token, consulta)
}

const paginaAnterior = () => {
	let token = document.getElementById('boton-anterior').dataset.token
	let consulta = document.getElementById('boton-anterior').dataset.query

	document.getElementById('listaDeVideos').innerHTML = ''
	document.getElementById('botones').innerHTML = ''

	solicitudFetch(token, consulta)
}

// Modal de Bootstrap para la visualización del vídeo en una ventana popup
var myVideoModal
var myModalSize
var myVideoIframe

const verVideoModal = (url) => {
	myVideoModal = new bootstrap.Modal(document.getElementById('videoModal'))
	myVideoIframe = document.getElementById('videoIframe')
	myModalSize = document.getElementById('modalSize')
	myModalSize.className = 'modal-dialog modal-md'
	myVideoIframe.width = 450
	myVideoIframe.height = 350
	// Para que el vídeo arranque al cargar el iframe hay que añadir ?autoplay=1 al final de la url
	myVideoIframe.src = url + '?autoplay=1'
	myVideoModal.show()
	console.log('Abriendo Modal')
}

const clickBtnCerrarVideoModal = () => {
	myVideoIframe.src = ''
	myVideoModal.hide()
	console.log('Cerrando Modal')
}

const clickBtnMenosVideoModal = () => {
	if (myVideoIframe.width > 800) {
		myModalSize.className = 'modal-dialog modal-lg'
		myVideoIframe.width = 750
		myVideoIframe.height = 575
	} else if (myVideoIframe.width > 500) {
		myModalSize.className = 'modal-dialog modal-md'
		myVideoIframe.width = 450
		myVideoIframe.height = 350
	} else if (myVideoIframe.width > 300) {
		myModalSize.className = 'modal-dialog modal-sm'
		myVideoIframe.width = 250
		myVideoIframe.height = 185
	}
}

const clickBtnMasVideoModal = () => {
	if (myVideoIframe.width < 300) {
		myModalSize.className = 'modal-dialog modal-md'
		myVideoIframe.width = 450
		myVideoIframe.height = 350
	} else if (myVideoIframe.width < 500) {
		myModalSize.className = 'modal-dialog modal-lg'
		myVideoIframe.width = 750
		myVideoIframe.height = 575
	} else if (myVideoIframe.width < 800) {
		myModalSize.className = 'modal-dialog modal-xl'
		myVideoIframe.width = 1090
		myVideoIframe.height = 840
	}
}
