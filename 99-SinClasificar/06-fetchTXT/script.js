const ficheroTXT = 'texto.txt'
fetch(ficheroTXT)
	.then((response) => {
		return response.text()
	})
	.then((data) => {
		console.log(data.toString())
		return renderData(data)
	})
	.then((numeroFilas) => {
		document.getElementById('totalFilas').innerHTML = `El fichero "${ficheroTXT}" tiene ${numeroFilas} filas`
	})

const renderData = (data) => {
	lista = document.getElementById('lista')
	lista.innerHTML = ''
	var array = data.toString().split('\n')
	array.forEach((item) => {
		let li = document.createElement('li')
		li.innerHTML = `<li>${item}</li>`
		lista.appendChild(li)
	})
	return array.length
}
