// Debido a que la función fetch accede por el canal HTTP, este ejemplo se debe ejecutar desde un servidor, como LiveServer

const archivoTXT = '04-texto.txt'
fetch(archivoTXT)
	.then((response) => {
		return response.text() // Devuelve una promesa con los datos del fichero TXT o CSV
	})
	.then((datosCSV) => {
		return convertCSVToJSON(datosCSV, ',') // Devuelve los datos del fichero convertidos a JSON
	})
	.then((datosJSON) => {
		console.log(datosJSON)
		document.getElementById('numero-filas').innerHTML = 'Total de registros: ' + datosJSON.length
		renderData(datosJSON)
	})
	.finally(() => console.log('Uff, por fin he terminado!'))
	.catch((error) => {
		alert(error) // Código a ejecutar cuando se rechaza la promesa
	})

// https://medium.com/@sanderdebr/converting-csv-to-a-2d-array-of-objects-94d43c56b12d
function convertCSVToJSON(str, delimiter = ',') {
	const titles = str.slice(0, str.indexOf('\n')).trim().split(delimiter)
	const rows = str
		.slice(str.indexOf('\n') + 1)
		.trim()
		.split('\n')
	return rows.map((row) => {
		const values = row.split(delimiter)
		return titles.reduce((object, curr, i) => ((object[curr] = values[i]), object), {})
	})
}

const renderData = (data) => {
	lista = document.getElementById('lista')
	lista.innerHTML = ''
	data.forEach((item) => {
		let li = document.createElement('li')
		li.innerHTML = item.nombre
		li.className = 'elemento-lista'
		lista.appendChild(li)
	})
	return
}
