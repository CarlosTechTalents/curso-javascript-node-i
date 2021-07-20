const verVideoModal = (url) => {
	const videoIframe = document.getElementById('videoIframe')
	// Para que el vídeo arranque al cargar el iframe hay que añadir ?autoplay=1 al final de la url
	videoIframe.src = url + '?autoplay=1'
	const myModal = new bootstrap.Modal(document.getElementById('videoModal'))
	myModal.show()
	console.log('Abriendo Modal')
}

const cerrarVideoModal = () => {
	const videoIframe = document.getElementById('videoIframe')
	videoIframe.src = ''
	console.log('Cerrando Modal')
}
