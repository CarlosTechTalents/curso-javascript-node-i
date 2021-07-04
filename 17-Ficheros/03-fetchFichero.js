// Debido a que la función fetch accede por el canal HTTP, este ejemplo se debe ejecutar desde un servidor, como LiveServer

const archivoTXT = '03-texto.txt'
fetch(archivoTXT)
	.then((response) => {
		return response.text() // Devuelve una promesa
	})
	.then((data) => {
		return renderData(data)
	})
	.then((numeroFilas) => {
		document.getElementById('numero-filas').innerHTML = numeroFilas
		console.log(numeroFilas)
	})
	.finally(() => console.log('Terminado'))
	.catch((error) => {
		alert(error) // Código a ejecutar cuando se rechaza la promesa
	})

const renderData = (data) => {
	lista = document.getElementById('lista')
	lista.innerHTML = ''
	var array = data.toString().split('\n')
	for (i in array) {
		let li = document.createElement('li')
		li.innerHTML = array[i]
		li.className = 'elemento-lista'
		lista.appendChild(li)
		console.log(array[i])
	}
	return 'El fichero tiene ' + array.length + ' filas'
}
