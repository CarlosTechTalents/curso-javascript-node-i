// Para generar la API Key de You Tube, entrar con una cuenta de Google en https://console.cloud.google.com/
// Crear Proyecto > APIs y servicios > Biblioteca > YouTube Data API v3 > Habilitar > Credenciales > Crear Credencial > API Key
// Hacemos la petición GET por el método get de jQuery-Ajax
// https://www.w3schools.com/jquery/jquery_ajax_get_post.asp

const solicitudAJAX = async (token, consulta) => {
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
		$('#botones').append(botones)
	} catch (error) {
		console.error('Error:', error)
	}

	// También se puede hacer la petición por JQuery de la siguiente forma:
	/*
		$.get(
		'https://www.googleapis.com/youtube/v3/search',
		{
			part: 'snippet, id',
			q: consulta,
			pageToken: token,
			type: 'video',
			key: 'AIzaSyB1kW_qegN472t8UWEbhkCNY7XFecE7-68'
		},
		(respuesta) => {
			console.log(respuesta)
		}
	)
	*/
}

const buscarVideo = () => {
	const consulta = document.getElementById('videoInput').value
	let token = ''
	solicitudAJAX(token, consulta)
}

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
    <a href="http://www.youtube.com/embed/${videoId}"><img src="${miniatura}"/></a>
  </div>
  <div class="lista-derecha">
    <h5><a href="http://www.youtube.com/embed/${videoId}"><span>${titulo}</span></a></h5>
    <h6><span class="autor">${tituloCanal}</span> Fecha: ${fechaVideo}</h6>
    <p>${descripcion}</p>
  </div>
  `
	return li
}

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
	let token = $('#boton-siguiente').data('token')
	let consulta = $('#boton-siguiente').data('query')

	$('#listaDeVideos').html('')
	$('#botones').html('')

	solicitudAJAX(token, consulta)
}

const paginaAnterior = () => {
	let token = $('#boton-anterior').data('token')
	let consulta = $('#boton-siguiente').data('query')

	$('#listaDeVideos').html('')
	$('#botones').html('')

	solicitudAJAX(token, consulta)
}

// Modal de Bootstrap

const verVideoModal = () => {
	const videoIframe = document.getElementById('videoIframe')
	// Para que el vídeo arranque al cargar el iframe hay que añadir ?autoplay=1 al final de la url
	videoIframe.src = 'https://www.youtube.com/embed/N66QJ2VfzXo' + '?autoplay=1'
	const myModal = new bootstrap.Modal(document.getElementById('videoModal'))
	myModal.show()

	console.log('Click')
}

const clickBtnCerrarModalVisualizar = () => {
	const videoIframe = document.getElementById('videoIframe')
	videoIframe.src = ''
	console.log('Cerrando Modal')
}
