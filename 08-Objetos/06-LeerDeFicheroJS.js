// https://www.digitalocean.com/community/tutorials/an-introduction-to-json
// https://www.digitalocean.com/community/tutorials/how-to-work-with-json-in-javascript

console.log(datosJO)
console.log(datosJO.superheroes)
console.log(datosJO.superheroes[0].nombre)
console.log(datosJO.superheroes.length)

datosJO.superheroes[1].superpoderes.push('Ubicuidad')

for (var i = 0; i < datosJO.superheroes.length; i++) {
	console.log(datosJO.superheroes[i].nombre + ' tiene ' + datosJO.superheroes[i].superpoderes)
}

console.log('Enemigos: ' + JSON.stringify(datosJO.enemigos))

// El submit del form actualiza la pantalla y se vuelve a cargar el valor original de la variable datosJO

function actualizarForm() {
	const nuevoValor = document.getElementById('nuevoSuperpoderForm').value
	datosJO.superheroes[0].superpoderes.push(nuevoValor)
	console.log(datosJO.superheroes[0].superpoderes)
	alert('pausa')
}

// El click del botón toma el valor del input y actualiza la variable JO
function actualizarClick() {
	const nuevoValor = document.getElementById('nuevoSuperpoder').value
	datosJO.superheroes[0].superpoderes.push(nuevoValor)
	console.log(datosJO.superheroes)
}
