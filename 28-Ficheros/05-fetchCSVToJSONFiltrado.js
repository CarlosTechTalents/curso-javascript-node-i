// Debido a que la función fetch accede por el canal HTTP, este ejemplo se debe ejecutar desde un servidor, como LiveServer

const archivoTXT = '05-texto.txt'
fetch(archivoTXT)
	.then((response) => {
		return response.text() // Devuelve una promesa con los datos del fichero TXT o CSV
	})

	.then((datosCSV) => {
		return convertCSVToJSON(datosCSV, ',') // Devuelve los datos del fichero convertidos a JSON
	})

	.then((datosJSON) => {
		console.log(datosJSON)
		console.log('Total datos del fichero: ' + datosJSON.length)

		return datosJSON.filter(funcionFiltro)
	})

	.then((arrayFiltrado) => {
		console.log('Array Filtrado\n', arrayFiltrado)
		console.log('Número de asignatura suspendidas = ', entradasInvalidas)

		document.getElementById('total-lista').innerHTML = `Asignatura aprobadas:  ${arrayFiltrado.length} <br>
		Asignatura suspendidas: ${entradasInvalidas}`
		renderData(arrayFiltrado)
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

		//Convierto los valores numéricos a número y el resto los deja igual
		const valuesConvertedToNumber = values.map((value) => {
			return isNaN(Number(value)) ? value : Number(value)
		})

		return titles.reduce((object, curr, i) => ((object[curr] = valuesConvertedToNumber[i]), object), {})
	})
}

// Función a aplicar en el filtro de datos y contamos las entradas que se quedan fuera del filtro.
// Filtro edad<30
var entradasInvalidas = 0
function funcionFiltro(obj) {
	if ('nota' in obj && obj.nota >= 5) {
		return true
	} else {
		entradasInvalidas++
		return false
	}
}

// Renderizo los elementos de la lista
const renderData = (data) => {
	lista = document.getElementById('lista')
	lista.innerHTML = ''
	data.forEach((item) => {
		let li = document.createElement('li')
		li.innerHTML = item.asignatura
		li.className = 'elemento-lista'
		lista.appendChild(li)
	})
	return
}
