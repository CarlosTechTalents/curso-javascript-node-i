// Promesas sin argumentos

// Devuelve el número 1 sin retardo
const primera = () => {
	console.log('- primera desde dentro de la función')
	return 1
}

// Devuelve el  número 2 con retardo
const segunda = () => {
	setTimeout(() => {
		console.log('- segunda desde dentro de la función')
		return 2
	}, 3000)
}

// Devuelve el número 3 sin retardo
const tercera = () => {
	console.log('- tercera desde dentro de la función')
	return 3
}

console.log(primera())
console.log(segunda())
console.log(tercera())
