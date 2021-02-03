// Los mismo ejemplos  anteriores en formato de arrow function o función flecha

// Uso de funciones como expresiones sin argumentos

var saludo = function () {
	return '¡Hola tú!'
}

console.log(saludo())

const saludoFlecha = () => {
	return 'Hota tú'
}
console.log(saludoFlecha())

// Uso de funciones como expresiones con argumentos

var saludoConNombre = function (nombre) {
	return '¡Hola ' + nombre + '!'
}

console.log(saludoConNombre('Carlos'))

const saludoConNombreFlecha = (nombre) => {
	return 'Hola ' + nombre + '!'
}

console.log(saludoConNombreFlecha('Función Flecha'))

// Si sólo tiene la función flecha sólo tiene la línea return, se puede omitir las llaves y el return

const saludoFlechaCorto = (nombre) => 'Hola ' + nombre + '!'

console.log(saludoFlechaCorto('Función Flecha Abreviada'))
