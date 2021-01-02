// Uso de funciones como expresiones sin argumentos

var saludo = function () {
	return '¡Hola tú!'
}

console.log(saludo())

// Uso de funciones como expresiones con argumentos

var saludoConNombre = function (nombre) {
	return '¡Hola ' + nombre + '!'
}

console.log(saludoConNombre('Carlos'))
