// Debido a que la función fetch accede por el canal HTTP, este ejemplo se debe ejecutar desde un servidor, como LiveServer

const archivoTXT = '03-texto.txt'
fetch(archivoTXT)
	.then((response) => {
		return response.text() // Devuelve una promesa
	})
	.then((data) => {
		console.log(data)
	})
	.finally(() => console.log('Terminado.'))
	.catch((error) => {
		/* Código a realizar cuando se rechaza la promesa */
		alert(error)
	})
