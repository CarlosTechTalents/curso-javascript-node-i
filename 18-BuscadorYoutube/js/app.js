// Para generar la API Key de You Tube, entrar con una cuenta de Google en https://console.cloud.google.com/
// Crear Proyecto > APIs y servicios > Biblioteca > YouTube Data API v3 > Habilitar > Credenciales > Crear Credencial > API Key
// Hacemos la petición GET por el método get de jQuery-Ajax
// https://www.w3schools.com/jquery/jquery_ajax_get_post.asp

const solicitudAJAX = (consulta) => {
	$.get(
		'https://www.googleapis.com/youtube/v3/search',
		{
			part: 'snippet, id',
			q: consulta,
			pageToken: '',
			type: 'video',
			key: 'AIzaSyB1kW_qegN472t8UWEbhkCNY7XFecE7-68'
		},
		(respuesta) => {
			console.log(respuesta)
			listaDeVideos = document.getElementById('listaDeVideos')
			respuesta.items.map((item) => {
				listaDeVideos.appendChild(renderVideo(item))
			})
		}
	)
}

const buscarVideo = () => {
	const consulta = document.getElementById('videoInput').value
	solicitudAJAX(consulta)
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
    <h6><span class="autor">${tituloCanal}</span>Fecha: ${fechaVideo}</h6>
    <p>${descripcion}</p>
  </div>
  `
	return li
}
